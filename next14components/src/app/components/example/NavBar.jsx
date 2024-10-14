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
                        <div className="text-white font-bold my-auto mb-1">
                            <a href=".#" className="text-white hover:underline">
                                Your Logo
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="/dashboard" className="text-white hover:underline">Dashboard</a>
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
                        <a href="/dashboard" className="block text-white py-2">Dashboard</a>
                        <a href="#" className="block text-white py-2">item 2</a>
                        <a href="#" className="block text-white py-2">item 3</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
