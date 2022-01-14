import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.gif'

export default function Navbar() {
    return (
        <>
            {/*  Header */}
            <div className="header">
                {/* Logo */}
                <div className="logo">
                    <Link to="#">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                {/*  Navbar */}
                <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/skill">Skill</Link>
                        <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    );
}
