"use client"

import React, { useState } from 'react';
import TContent from '../components/TContents';
import Navbar from '../components/TnavBar';
import Sidebar from '../components/TsideBar';

function page() {

    const menuItems = [
        { id: 1, label: 'Menu Item 1' },
        { id: 2, label: 'Menu Item 2' },
    ];

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="flex flex-col md:flex-row h-screen">
                {/* ส่ง menuItems เป็น props */}
                <Sidebar menuItems={menuItems} />

                <div className="flex-1">
                    {/* ส่ง menuItems เป็น props */}
                    <Navbar menuItems={menuItems} />

                    <TContent />

                </div>

            </div>

        </div>
    );
}

export default page;

{/*
menuItems={menuItems} isDsidebarOpen={isDsidebarOpen}
*/}