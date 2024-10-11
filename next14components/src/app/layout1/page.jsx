import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function page() {
  return (
    <div className="bg-gray-dark text-white h-screen grid grid-cols-1 xl:grid-cols-2 gap-2">

        <div className="sidebar w-32 h-full bg-green">
            <p>SideBar</p>
        </div>

        <div className="w-32 h-24 bg-gray-300 rounded-xl grid grid-rows">

            <div>
                <p>NavBar</p>
            </div>

            <div>
                <p>Content</p>
            </div>

        </div>
      
    </div>
  );
}
