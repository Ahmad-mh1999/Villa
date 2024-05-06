import React, { useState } from 'react'
import './Navbar.css'
import { FaMap } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    function handleMenu() {
        setMenuActive(!menuActive);
    }
    return (
        <>
            <div className="header">
                <div className="container header-flex">
                    <div className="nav-info">
                        <div className="nav-email">
                            <FaEnvelope />
                            <h6> info@company.com</h6>
                        </div>
                        <div className="nav-location">
                            <FaMap />
                            <h6>Sunny Isles Beach, FL 33160</h6>
                        </div>
                    </div>
                    <div className="nav-links">
                        <div className="facebook link-item">
                            <CiFacebook />
                        </div>
                        <div className="linkedin link-item">
                            <CiLinkedin />
                        </div>
                        <div className="twitter link-item">
                            <FaTwitter />
                        </div>
                        <div className="instagram link-item">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='nav-bar'>
                <div className="container">

                    <div className="nav-content">
                        <div className="nav-logo">
                            <Link to="/index.html" >
                                <h1>Villa</h1>
                            </Link>
                        </div>
                        <div className="main-nav">
                            <ul className='nav'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/properties"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                    >
                                        Properties
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/propertyDetails"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                    >
                                        Property Details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <div className="calendar">
                                        <FaCalendar />
                                    </div>
                                    <button className='schedule-btn' > Schedule a visit </button>
                                </li>
                            </ul>
                        </div>
                        <div className={menuActive ? "menu-icon activeNav" : "menu-icon"} onClick={handleMenu} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {menuActive && 
                            <div className="dropdown-nav">
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                        onClick={handleMenu}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/properties"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                        onClick={handleMenu}
                                    >
                                        Properties
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/propertyDetails"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                        onClick={handleMenu}
                                    >
                                        Property Details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? "activeNav" : ""
                                        }
                                        onClick={handleMenu}
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar