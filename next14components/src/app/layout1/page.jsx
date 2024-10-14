import React from 'react';

const Layout1 = () => {

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="flex flex-col md:flex-row h-screen">

                <div className="bg-gray-dark p-4 md:w-64">
                    {/* Sidebar */}
                    <h1 className="text-white py-2">Sidebar</h1>
                    <ul>
                        <li className="text-center text-gray py-4">Menu Item 1</li>
                        <li className="text-center text-gray py-4">Menu Item 2</li>
                    </ul>
                </div>

                <div className="flex-1">

                    <nav className="bg-blue p-4">
                        {/* Navbar */}
                        <h1 className='text-right text-white'>Navbar</h1>
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
