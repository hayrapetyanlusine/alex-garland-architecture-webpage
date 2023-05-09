import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss"
import logo from "../../images/logo.png"

export const Navbar = () => {
    const [open, isOpen] = useState(false);

    const menuClick = () => {
        isOpen(!open);
    }

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <NavLink to="/"> <img src={logo} alt="logo" /> </NavLink>
                </div>
                <div className={`menu ${open ? 'open' : ''}`} onClick={menuClick}>
                    <NavLink to="/studio">Studio</NavLink>
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/team">Team</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className={`mobile-menu-cover ${open ? 'open' : ''}`}></div>
                <div className={`burger-menu ${open ? 'open' : ''}`} onClick={menuClick}>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}