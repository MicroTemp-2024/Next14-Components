export default function Dashboard() {
    return (
        <div className="grid grid-cols-12 h-screen">
            <aside className="bg-gray-800 text-white col-span-2">
                {/* แถบเมนู */}
                <ul>
                    <li>เมนู 1</li>
                    <li>เมนู 2</li>
                    <li>เมนู 3</li>
                </ul>
            </aside>
            <main className="col-span-10 p-4">
                <h1>Dashboard</h1>
                {/* เนื้อหาหลัก */}
            </main>
        </div>
    );
}