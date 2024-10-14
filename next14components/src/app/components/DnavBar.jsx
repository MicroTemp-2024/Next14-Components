// @Layout2
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Dnavbar = ({ onToggleDsidebar }) => {
    return (
        <nav className="bg-blue p-4">
            {/* hiidden with md:display */}
            <div className="md:hidden">
                {/* iculde FaBars */}
                <button onClick={onToggleDsidebar}>
                    <FaBars className="text-white" />
                </button>
            </div>

            <h1 className="text-right text-white hidden md:block">Navbar</h1>

        </nav>
    );
};

export default Dnavbar;