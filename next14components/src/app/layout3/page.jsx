"use client"

import React, { useState } from 'react';
import Dsidebar from '../components/DsideBar';
import Dnavbar from '../components/DnavBar';
import T3contents from '../components/L3contents';

function page() {

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

                    <T3contents />

                </div>

            </div>

        </div>
    );
}

export default page;