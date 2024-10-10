# Card

```JavaScript
import React from 'react';

const CardContainer = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        Card title
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {children}
      </div>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of   

        the card's content.
      </p>   

    </div>
  );
};

export default CardContainer;
```

คำอธิบายโค้ด

- โครงสร้าง : โครงสร้างหลักของ component ยังคงเหมือนเดิม คือมี header, body และ footer
- Tailwind Classes : เราใช้คลาสต่างๆ ของ Tailwind CSS เพื่อจัดรูปแบบให้กับ component
- bg-white : ทำให้ background เป็นสีขาว
- shadow-md : เพิ่มเงาให้ card
- rounded : ทำให้มุมของ card เป็นมน
- px-8 pt-6 pb-4 mb-4 : กำหนด padding และ margin
- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 : สร้าง grid layout โดยแบ่งเป็น 1 column สำหรับหน้าจอเล็ก, 2 columns สำหรับหน้าจอขนาดกลาง และ 4 columns สำหรับหน้าจอขนาดใหญ่
- ความยืดหยุ่น : คุณสามารถปรับแต่งคลาสต่างๆ ของ Tailwind CSS ได้ตามต้องการ เช่น เปลี่ยนสี, ขนาด font, หรือเพิ่ม effect ต่างๆ

ตัวอย่างการใช้งาน Sub Card

```JavaScript
<CardContainer>
  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Sub Card 1
  </div>
  {/* Sub Card อื่นๆ */}
</CardContainer>
```

ปรับแต่งเพิ่มเติม

- Customizing : คุณสามารถกำหนดค่าต่างๆ ของ Tailwind CSS ได้ในไฟล์ tailwind.config.js เพื่อให้ตรงกับความต้องการของโครงการของคุณ
- Responsiveness : ใช้ utility classes เช่น sm:, md:, lg: เพื่อสร้าง layout ที่ปรับเปลี่ยนได้ตามขนาดหน้าจอ
- Variants : ใช้ variants เช่น hover, focus เพื่อสร้าง interactive elements

คำแนะนำ

- ศึกษาเอกสาร : ศึกษาเอกสารของ Tailwind CSS เพื่อเรียนรู้เกี่ยวกับคลาสและ utility ที่มีให้ใช้งาน
- ลองผิดลองถูก : การสร้าง UI ด้วย Tailwind CSS นั้นสนุกและง่ายต่อการเรียนรู้ ลองปรับแต่งค่าต่างๆ เพื่อให้ได้ผลลัพธ์ที่ต้องการ
- ใช้เครื่องมือช่วย : มีเครื่องมือออนไลน์มากมายที่ช่วยในการสร้างและทดสอบ CSS เช่น Tailwind Playground

คำถามเพิ่มเติม :

- คุณต้องการให้ Card Container มีฟังก์ชันอะไรเพิ่มเติมบ้าง (เช่น animation, interactive elements)
- คุณต้องการปรับแต่งสไตล์ของ Card Container อย่างไรบ้าง
