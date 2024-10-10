# NavBar + SideBar theme AdminLTE

- ใช้ icon จากที่นี่ https://github.com/tailwindlabs/heroicons#react

## React

First, install @heroicons/react from npm :

```bash
npm install @heroicons/react
```

Now each icon can be imported individually as a React component :

```JavaScript
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

- The 24x24 outline icons can be imported from `@heroicons/react/24/outline`, 
- the 24x24 solid icons can be imported from `@heroicons/react/24/solid`, 
- the 20x20 solid icons can be imported from `@heroicons/react/20/solid`, 
- and 16x16 solid icons can be imported from `@heroicons/react/16/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word Icon.

[Browse the full list of icon names on UNPKG →](https://unpkg.com/browse/@heroicons/react@2.1.5/24/outline/)

## สร้างโครงสร้าง Component DnavBar :

Navbar : ใช้วัสดุจาก Tailwind CSS เพื่อจัดรูปแบบ Navbar ให้ดูสวยงาม มีปุ่ม Hamburger สำหรับเปิด/ปิด Sidebar เมื่อหน้าจอมีขนาดเล็ก

```JavaScript
// components/Dnavbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <a className="text-white font-bold">AdminLTE Inspired</a>
        </Link>
        {/* Hamburger menu for small screens */}
        <button className="text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
```

## สร้างโครงสร้าง Component DsideBar :

Sidebar : ใช้ useState เพื่อจัดการสถานะการเปิด/ปิด Sidebar ใช้ Tailwind CSS เพื่อจัดรูปแบบและการแสดงผลของ Sidebar

```JavaScript
// components/Dsidebar.js
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'w-64' : 'w-0'}`}>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger menu icon */}
      </button>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/">
              <a className="text-white hover:bg-gray-700 px-4 py-2 block">Dashboard</a>
            </Link>
          </li>
          {/* Add more menu items here */}
        </ul>
      </nav>
    </div>
  );
}
```

## สร้าง Layout :

Layout : แบ่งหน้าเป็นสองส่วนหลัก คือ Sidebar และส่วนแสดงเนื้อหาหลัก ใช้ Flexbox เพื่อจัดวางองค์ประกอบต่างๆ

```JavaScript
import Dnavbar from "../components/DnavBar";

export default function Test() {
    return (
        <div className="flex flex-col min-h-screen bg-blue">

            <Dnavbar />

            <div className="flex-grow flex flex-col">

                <div className="flex flex-row justify-between items-start p-5">
                    {/* ส่วนที่ 2: 2 คอลัมน์ */}
                    <div className="w-1/2">
                        {/* เนื้อหาคอลัมน์ซ้าย */}
                    </div>

                    <div className="w-1/2">
                        {/* เนื้อหาคอลัมน์ขวา */}
                    </div>

                </div>

                <div className="p-5">
                    {/* ส่วนที่ 3: คอลัมน์เดียวเต็มความกว้าง */}
                    <div>MainPage</div>
                </div>

            </div>

        </div>
    );
}
```

คำอธิบายโค้ด :

- `div` นอกสุด :
    - `flex flex-col` : กำหนดให้เป็น flex container และเรียง item ตามแนวดิ่ง
    - `min-h-screen` : ทำให้สูงเต็มหน้าจอ
- `<Dnavbar />` : วางไว้ด้านบนสุด
- `div` ที่สอง :
    - `flex-grow` : ทำให้ div นี้ขยายให้เต็มพื้นที่ที่เหลือ
    - `flex flex-col` : กำหนดให้เป็น flex container และเรียง item ตามแนวดิ่ง
- ส่วนที่ 2 :
    - `flex flex-row` : เรียง item ตามแนวนอน
    - `justify-between` : วาง item ให้ชิดซ้ายและขวา
    - `items-start` : จัดตำแหน่ง item ตามแนวแกน Y ให้ชิดบน
    - `w-1/2` : กำหนดความกว้างของแต่ละคอลัมน์ให้เป็นครึ่งหนึ่ง
- ส่วนที่ 3 :
    - `p-5` : เพิ่ม padding 5 units
    - `div` : เป็นคอลัมน์เดียวเต็มความกว้าง

## จุดเด่น :

โครงสร้างชัดเจน : แบ่งส่วนของ layout ออกเป็นส่วนๆ ช่วยให้เข้าใจและปรับแต่งได้ง่าย
ยืดหยุ่น : สามารถปรับเปลี่ยนขนาดและตำแหน่งของแต่ละส่วนได้ตามต้องการโดยใช้ utility class ของ Tailwind CSS
Responsive : Layout จะปรับเปลี่ยนตามขนาดหน้าจอโดยอัตโนมัติ เนื่องจากใช้ Flexbox

## ปรับแต่งเพิ่มเติม :

- ปรับขนาด : ปรับค่า `w-1/2` เพื่อเปลี่ยนขนาดของคอลัมน์ในส่วนที่ 2
- เพิ่มช่องว่าง : ใช้คลาส `mx-4` หรือ `my-4` เพื่อเพิ่มช่องว่างระหว่างส่วนต่างๆ
- จัดตำแหน่ง : ใช้คลาส `justify-center`, `items-center` หรือ `self-center` เพื่อจัดตำแหน่งของ `item` ภายใน `container`
- Tailwind CSS : ปรับแต่งคลาสต่างๆ ของ Tailwind CSS เพื่อให้ตรงกับสไตล์ที่ต้องการ
- Icon : ใช้ icon library เช่น Heroicons หรือ Font Awesome เพื่อเพิ่มความสวยงามให้กับ Navbar และ Sidebar
- เมนูย่อย : สร้างเมนูย่อยโดยใช้ nested list และ conditional rendering
- สถานะ Active : เพิ่มคลาส CSS เพื่อแสดงเมนูที่กำลังใช้งานอยู่
- Responsiveness : ปรับแต่ง layout ให้เหมาะสมกับหน้าจอขนาดต่างๆ โดยใช้ media queries ของ Tailwind CSS
- ฟังก์ชันเพิ่มเติม : เพิ่มฟังก์ชันอื่นๆ เช่น การค้นหา, การแจ้งเตือน, ฯลฯ
