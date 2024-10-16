"use client"
// @Container > Test

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    // กำหนดค่า menuItems ภายใน component
    const menuItems = [
        { id: 1, label: 'เมนูแรก' },
        { id: 2, label: 'เมนูที่สอง' },
        { id: 3, label: 'เมนูที่สาม' },
    ];
    {/* กำหนดค่าตัวแปรสำหรับ function MenuOpen */ }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    {/* กำหนดค่า function toggleMenu */ }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue relative py-4 pr-6 shadow-md">

            {/* hiidden with md:display */}
            <div className="md:hidden">
                {/* iculde FaBars */}
                <button className="pl-6" onClick={toggleMenu}>
                    <FaBars className="text-white" />
                </button>

                <div className={`px-4 pt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {/* เมนูของคุณที่นี่ */}
                    <ul className='grid gap-2 p-2 text-white'>
                        {menuItems.map((item) => (
                            <li key={item.id}>{item.label}</li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Left navbar links */}

            {/* กลับมาทำให้ซ่อนได้ เมื่อจอเล็ก เหมือน sidebar */}
            <ul>
                <li>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <a href="#" className="nav-link">
                    Contact
                </a>
                <li>
                </li>

                <li>
                </li>
            </ul>

            {/* Right navbar links */}

            <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="navbar-search"
                        href="#"
                        role="button"
                    >
                        <i className="fas fa-search" />
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-comments" />
                        <span className="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">

                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        Brad Diesel
                                        <span className="float-right text-sm text-danger">
                                            <i className="fas fa-star" />
                                        </span>
                                    </h3>
                                    <p className="text-sm">Call me whenever you can...</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">

                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        John Pierce
                                        <span className="float-right text-sm text-muted">
                                            <i className="fas fa-star" />
                                        </span>
                                    </h3>
                                    <p className="text-sm">I got your message bro</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            {/* Message Start */}
                            <div className="media">

                                <div className="media-body">
                                    <h3 className="dropdown-item-title">
                                        Nora Silvester
                                        <span className="float-right text-sm text-warning">
                                            <i className="fas fa-star" />
                                        </span>
                                    </h3>
                                    <p className="text-sm">The subject goes here</p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                            {/* Message End */}
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">
                            See All Messages
                        </a>
                    </div>
                </li>

                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">

                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>

                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        
                        <span className="dropdown-item dropdown-header">
                            15 Notifications
                        </span>

                        <div className="dropdown-divider" />

                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new messages
                            <span className="float-right text-muted text-sm">
                                3 mins
                            </span>
                        </a>

                        <div className="dropdown-divider" />

                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">
                                12 hours
                            </span>
                        </a>

                        <div className="dropdown-divider" />

                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">
                                2 days
                            </span>
                        </a>

                        <div className="dropdown-divider" />

                        <a href="#" className="dropdown-item dropdown-footer">
                            See All Notifications
                        </a>

                    </div>
                </li>

                <li className="nav-item">
                    <h1 className="text-right text-white">item1</h1>
                </li>

                <li className="nav-item">
                    <h1 className="text-right text-white">Navbar</h1>
                </li>

            </ul>

        </nav>
    );
};

export default Navbar;

{/*
<ul>
{menuItems.map((item) => (
    <li key={item.id} className="text-center text-gray py-4">
        {item.label}
    </li>
))}
</ul>
*/}