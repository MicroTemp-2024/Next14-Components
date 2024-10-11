# Theme Dark/Light

1. ตั้งค่า Tailwind CSS สำหรับ Dark Mode :

*คอนฟิกไฟล์ `tailwind.config.js` เพื่อเปิดใช้งาน Dark Mode และกำหนดค่าสี :*

```JavaScript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // หรือ 'media' ถ้าต้องการให้เบราว์เซอร์จัดการ
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3182CE',
          dark: '#1A202C',
        },
        // ... สีอื่นๆ ที่คุณต้องการ
      },
    },
  },
};
```

2. สร้าง Context สำหรับจัดการธีม :

*สร้างไฟล์ `components/ThemeContext.jsx` เพื่อจัดการสถานะของธีมและฟังก์ชันสำหรับเปลี่ยนธีม :*

```JavaScript
// ThemeContext.jsx
import { createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark'   
 : 'light'));
  };

  return   
 (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
```

3. สร้าง Component สำหรับสลับธีม :

*สร้างไฟล์ `components/ThemeToggle.jsx` เพื่อสร้างปุ่มสำหรับสลับธีม :*

```JavaScript
// ThemeToggle.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme   
 } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default ThemeToggle;
```

4. นำไปใช้ใน Component อื่นๆ :

*ห่อแอปพลิเคชันด้วย `ThemeProvider` :*

```JavaScript
// pages/index.jsx
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

function Home() {
  return (
    <div>
      <ThemeToggle />
      {/* ส่วนประกอบอื่นๆ ที่ใช้ธีม */}
      <h1 className="text-primary">Hello, world!</h1>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
```
