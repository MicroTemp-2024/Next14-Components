export default function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 font-[family-name:var(--font-geist-sans)] text-white bg-blue">
            {/* ปรับขนาดหน้าจอทั้งหมด เป็นแบบ เต็มความสูง กึ่งกลางซ้ายขวา */}
            <main className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full rounded-md p-5 bg-gray-dark grid-auto-rows: minmax(100px, max-content); align-items: start;">
                {/* กำหนดจำนวน cols และ auto rows เมือเปลี่ยนขนาดจอ */}
                <div className="rounded-md bg-gray-light h-40 col-span-1 sm:col-span-4">1</div>
                {/* กำหนดแต่ละ rows ใช้กี่ cols เงื่อนไขจำนวน col ต่อ 1 rows ต้องไม่เกิน 4 cols */}
                <div className="rounded-md bg-green h-40 col-span-1 sm:col-span-2">2</div>
                <div className="rounded-md bg-yellow h-40 col-span-1 sm:col-span-2">3</div>
                {/* กำหนดให้มี 2 div ใน row นี้ โดยกำหนดให้ ทั้ง 2 div มีพื้นที่เท่ากัน คือ div ละ 2 cols */}
                <div className="rounded-md bg-gray h-40 col-span-1 sm:col-span-3">4</div>
                <div className="rounded-md bg-purple h-40 col-span-1 sm:col-start-4">5</div>
                {/* กำหนดให้มี 2 div ใน row นี้ โดยกำหนดให้ div แรกมี 3 cols และ div ต่อไปมีพื้นที่ 1 col */}
                <div className="rounded-md bg-orange h-40 col-span-1">6</div>
                <div className="rounded-md bg-pink h-40 col-span-1 sm:col-span-3">7</div>
                {/* กำหนดให้มี 2 div ใน row นี้ โดยกำหนดให้ div แรกมี 1 col และ div ต่อไปมีพื้นที่ 3 cols */}
            </main>            
        </div>
    );
}