// @Main Page
import React, { useState } from 'react';
import Link from 'next/link';
import { linkMenuItems } from './LinkMenu';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {

    {/* กำหนดค่าตัวแปรสำหรับ function MenuOpen */ }
    const [islinkMenuItemsOpen, setIslinkMenuItemsOpen] = useState(false);
    {/* กำหนดค่า function toggleMenu */ }
    const toggleMenu = () => {
        setIslinkMenuItemsOpen(!islinkMenuItemsOpen);
    };

    return (
        <nav className="bg-blue text-white h-[60px] shadow-md ">

            {/* hiidden with md:display */}
            <div className="text-left p-5 md:hidden">
                
                {/* iculde FaBars */}
                <button onClick={toggleMenu}>
                    <FaBars />
                </button>

                <div className="bg-gray p-2 mt-4 shadow-md"
                    style={{ 
                        opacity: islinkMenuItemsOpen ? 0.9 : 0, 
                        transition: 'opacity 0.3s ease-in-out' 
                    }} >

                    <ul style={{ display: islinkMenuItemsOpen ? 'block' : 'none' }}>
                        {linkMenuItems.map(item => (
                            <li className='m-1' key={item.id}>
                                <Link href={item.link}>
                                    <p>{item.label}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

            <div className="text-right py-4 px-6 hidden md:block">
                MnavBar
            </div>

        </nav>
    )
}

export default NavBar