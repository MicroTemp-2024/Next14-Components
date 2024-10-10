import React from "react";

export default function Dnavbar() {
    return (
        <nav className="bg-[#6600ff]">
            <div className="container mx-auto flex justify-between items-center py-4">

                <a className="text-white font-bold">DnavBar</a>

                {/* Hamburger menu for small screens */}
                <button className="text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </nav>
    );
}