"use client"

import React, { useState } from 'react';
import Dsidebar from '../components/DsideBar';
import Dnavbar from '../components/DnavBar';

const Test = () => {

    const [isDsidebarOpen, setIsDsidebarOpen] = useState(false);
    const menuItems = [
        { id: 1, label: 'Menu Item 1' },
        { id: 2, label: 'Menu Item 2' },
    ];

    const toggleSidebar = () => {
        setIsDsidebarOpen(!isDsidebarOpen);
    };

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="flex flex-col md:flex-row h-screen">

                <Dsidebar menuItems={menuItems} isDsidebarOpen={isDsidebarOpen} />

                <div className="flex-1">

                    <Dnavbar onToggleSidebar={toggleSidebar} />

                    <main className="p-4">
                        {/* Content */}
                        <p>Content</p>
                    </main>

                </div>

            </div>

        </div>
    );
}

export default Test;


{/* 
<div className="bg-gray-dark p-4 md:w-64">
// Sidebar 
<h1 className="text-white py-2">Sidebar</h1>
<ul>
    <li className="text-center text-gray py-4">Menu Item 1</li>
    <li className="text-center text-gray py-4">Menu Item 2</li>
</ul>
</div>
 */}