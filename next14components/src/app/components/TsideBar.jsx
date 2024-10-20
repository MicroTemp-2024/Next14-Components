// @Test
import React from 'react';
import { SideBarlinkItems } from './LinkMenu';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="bg-gray-dark hidden md:block h-screen">
                <div className="user-panel text-white h-[60px] py-4 px-6 mb-2 shadow-md">
                    <h1>Sidebar</h1>
                </div>
                <div className='sidebar-menu mt-2'>
                    <ul className="text-center text-gray">

                        {SideBarlinkItems.map(item => (
                            <li className="py-4" key={item.id}>
                                <Link href={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

{/* 
<div className={`bg-gray-dark px-4 ${isSidebarOpen ? 'block' : 'hidden'}`}>

<p>Hello</p>

</div>
*/}