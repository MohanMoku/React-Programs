import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
            <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
        </nav>
    )
}

export default Navbar