"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Layout.module.css';

function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="flex h-screen">
        <div className="bg-gray-700 w-64">
          {/* Sidebar */}
          <h1 className="text-white text-center py-4">Sidebar</h1>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
          </ul>
        </div>
        <div className="flex-1">
          <nav className="bg-purple-500 p-4">
            {/* Navbar */}
            <h1 className="text-white">Navbar</h1>
          </nav>
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;