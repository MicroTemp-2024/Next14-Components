const Layout1 = () => {

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="flex h-screen">

                <div className="bg-gray-dark w-64">
                    {/* Sidebar */}
                    <h1 className="text-white p-4 ">Sidebar</h1>
                    <ul>
                        <li className="text-center text-gray py-4">Menu Item 1</li>
                        <li className="text-center text-gray py-4">Menu Item 2</li>
                    </ul>
                </div>

                <div className="flex-1">

                    <nav className="bg-blue p-4">
                        {/* Navbar */}
                        <h1 className='text-right'>Navbar</h1>
                    </nav>

                    <main className="p-4">
                        {/* Content */}
                        <p>Content</p>
                    </main>

                </div>

            </div>

        </div>
    );
}

export default Layout1
