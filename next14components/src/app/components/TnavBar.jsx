"use client"
// @Container > Test

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { SideBarlinkItems, linkMenuItems } from './LinkMenu';
import Link from 'next/link';

const Navbar = () => {

    {/* กำหนดค่าตัวแปรสำหรับ function MenuOpen */ }
    const [isSideBarlinkItemsOpen, setIsSideBarlinkItemsOpen] = useState(false);
    {/* กำหนดค่า function toggleMenu */ }
    const toggleMenu = () => {
        setIsSideBarlinkItemsOpen(!isSideBarlinkItemsOpen);
    };

    return (
        <nav className="bg-blue relative flex justify-between h-[60px] shadow-md"> 
        {/* py-4 px-6 */}

            {/* hiidden with md:display */}
            <div className="p-5 md:hidden">

                {/* iculde FaBars */}
                <button onClick={toggleMenu}>
                    <FaBars className="text-white" />
                </button>

                <div className="bg-gray w-64 mt-4 shadow-md"
                    style={{ 
                        opacity: isSideBarlinkItemsOpen ? 0.9 : 0, 
                        transition: 'opacity 0.3s ease-in-out' 
                    }} >
                    
                    {/* เมนูของคุณที่นี่ */}
                    <ul style={{ display: isSideBarlinkItemsOpen ? 'block' : 'none' }} 
                        className='grid gap-2 p-2 text-white'>

                        {SideBarlinkItems.map((item) => (
                            <li className='m-1' key={item.id}>
                                <Link href={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

            {/* Left navbar links */}
            <div className='py-4 px-6 hidden md:block'>

                <ul className='flex flex-row gap-2 text-white'>
                    {linkMenuItems.map((item) => (
                        <li className="text-white" key={item.id}>{item.label}</li>
                    ))}
                </ul>

            </div>

            {/* Right navbar links */}
            <ul className="py-4 px-6 flex flex-row">

                <li className="nav-item px-1">
                    <a href='#' className="text-right text-white text-xl">Navbar</a>
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;