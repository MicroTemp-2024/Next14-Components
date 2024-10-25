# NavBar

NavBar V.0 (Test Version)

_**NOTE** : `npm install react-icons --save`_

~~~JavaScript
// '../components/Dnavbar.jsx'

import React from 'react';
import { FaBars } from 'react-icons/fa';

const Dnavbar = ({ onToggleSidebar }) => {
    return (
        <nav className="bg-blue p-4">
            {/* hiidden with md:display */}
            <div className="md:hidden">
                {/* iculde FaBars */}
                <button onClick={onToggleSidebar}>
                    <FaBars className="text-white" />
                </button>
            </div>

            <h1 className="text-right text-white hidden md:block">Navbar</h1>

        </nav>
    );
};

export default Dnavbar;
~~~

Main NavBar V.1

~~~JavaScript
"use client"

import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#6600ff] h-16 p-5">
            {/* Added h-16 for 16px height */}
            <div className="container mx-auto">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        {/* Added my-auto mb-1 for center on top-button */}
                        <div className="text-white font-bold my-auto mb-1">Your Logo</div>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-white hover:underline">item 1</a>
                        <a href="#" className="text-white hover:underline">item 2</a>
                        <a href="#" className="text-white hover:underline">item 3</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="bg-gray-800 p-4">
                        <a href="#" className="block text-white py-2">item 1</a>
                        <a href="#" className="block text-white py-2">item 2</a>
                        <a href="#" className="block text-white py-2">item 3</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
~~~

NavBar + SideBar

NavBar Easy

~~~JavaScript
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-[#333] text-white p-5'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link href="/">
                            Micro API
                        </Link>
                    </div>
                    <ul className='flex'>
                        <li><Link className='mx-3' href="/register">Sign Up</Link></li>
                        <li><Link className='mx-3' href="/login">Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
~~~
