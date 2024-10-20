// @Main Page
import React from 'react'
import Link from 'next/link';
import { linkMenuItems } from './LinkMenu';

const SideBar = () => {
    return (
        <sidebar className="bg-gray-dark h-screen md:w-64 hidden md:block">

            <div className="text-white h-[60px] py-4 px-6 shadow-md">
                <h1>Sidebar</h1>
            </div>
            
            <ul className="text-center text-gray py-4">
                {linkMenuItems.map(item => (
                    <li key={item.id} className="p-2 m-1">
                        <Link href={item.link}>
                            <p>{item.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </sidebar>
    )
}

export default SideBar