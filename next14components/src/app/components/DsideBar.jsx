// @Layout2
import React from 'react';

const Dsidebar = ({ menuItems }) => {
  return (
    <div className="bg-gray-dark px-4 md:w-64 hidden md:block">
      <h1 className="text-white py-4">Sidebar</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="text-center text-gray py-4">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dsidebar;