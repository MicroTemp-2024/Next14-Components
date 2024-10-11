import Dnavbar from "../components/DnavBar";

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 font-[family-name:var(--font-geist-sans)] text-white bg-blue">
            {/* ปรับขนาดหน้าจอทั้งหมด เป็นแบบ เต็มความสูง กึ่งกลางซ้ายขวา */}
            <Dnavbar />
            <main className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full rounded-md p-5 bg-gray-dark grid-auto-rows: minmax(100px, max-content); align-items: start;">
                <div>MainPage</div>
                <a href="../test">Test Page</a>
            </main>            
        </div>
    );
}