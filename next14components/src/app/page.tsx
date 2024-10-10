export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 font-[family-name:var(--font-geist-sans)] text-white bg-blue">
            {/* ปรับขนาดหน้าจอทั้งหมด เป็นแบบ เต็มความสูง กึ่งกลางซ้ายขวา */}
            <main className="grid grid-cols-1 w-full rounded-md p-5 bg-gray-dark grid-auto-rows: minmax(100px, max-content); align-items: center justify-center min-h-[80vh]">
                {/* กำหนดจำนวน cols และ auto rows เมือเปลี่ยนขนาดจอ */}
                <h1 className="grid items-center justify-center text-center text-[#ffffff]">HomePage</h1>
                {/* <img src="/your-image.jpg" alt="Your image" className="w-full" /> */}
            </main>
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mt-5"
                href="./main"
                // target="_blank"
                rel="noopener noreferrer"
            >
                Main Page
            </a>
        </div>
    );
}
