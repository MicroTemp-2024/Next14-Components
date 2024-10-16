// @Test
import React from 'react';

const Sidebar = ({ menuItems, isSidebarOpen  }) => {
    return (
        <div className="bg-gray-dark hidden md:block h-screen">
            <h1 className="text-white py-4 px-6 shadow-md">Sidebar</h1>
            <ul className="text-center text-gray">
                <li className="py-4">Menu Item 1</li>
                <li className="py-4">Menu Item 2</li>
                <li className="py-4">Menu Item 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;

{/* 
<div className={`bg-gray-dark px-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>

<p>Hello</p>

</div>
*/}