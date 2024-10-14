// @Test
import React from 'react';

const Sidebar = ({ menuItems, isSidebarOpen  }) => {
    return (
        <div className="bg-gray-dark md:w-64 hidden md:block">
            <h1 className="text-white py-4 px-6 shadow-md">Sidebar</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id} className="text-center text-gray py-4">
                        {item.label}
                    </li>
                ))}
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