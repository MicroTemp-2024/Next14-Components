"use client"
// @Test

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    // กำหนดค่า menuItems ภายใน component
    const menuItems = [
        { id: 1, label: 'เมนูแรก' },
        { id: 2, label: 'เมนูที่สอง' },
        { id: 3, label: 'เมนูที่สาม' },
    ];
    {/* กำหนดค่าตัวแปรสำหรับ function MenuOpen */ }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    {/* กำหนดค่า function toggleMenu */ }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue py-4 pr-6 shadow-md">
            {/* hiidden with md:display */}
            <div className="md:hidden">
                {/* iculde FaBars */}
                <button className="pl-6" onClick={toggleMenu}>
                    <FaBars className="text-white" />
                </button>

                <div className={`px-4 pt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {/* เมนูของคุณที่นี่ */}
                    <ul className='grid gap-2 p-2 text-white'>
                        {menuItems.map((item) => (
                            <li key={item.id}>{item.label}</li>
                        ))}
                    </ul>

                </div>

            </div>

            <h1 className="text-right text-white hidden md:block">Navbar</h1>

        </nav>
    );
};

export default Navbar;

{/*
<ul>
{menuItems.map((item) => (
    <li key={item.id} className="text-center text-gray py-4">
        {item.label}
    </li>
))}
</ul>
*/}