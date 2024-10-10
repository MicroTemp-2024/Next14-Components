"use client"

import { useState } from 'react';

export default function Dsidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#ff00ff] [{`sidebar ${isOpen ? 'w-64' : 'w-0'}`}]">
            <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
                {/* Hamburger menu icon */}
            </button>
            <nav className="sidebar-nav">
                <ul>
                    <li>

                        <a className="text-white hover:bg-gray-700 px-4 py-2 block">Dashboard</a>

                    </li>
                    {/* Add more menu items here */}
                </ul>
            </nav>
        </div>
    );
}