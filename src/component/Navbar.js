import React from 'react'
import logo from '../img/logo.gif'

export default function Navbar() {
    return (
        <>
            {/*  Header */}
            <div className="header">
                {/* Logo */}
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                {/*  Navbar */}
                <div className="navbar">
                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Project</a>
                        <a href="#skill">Skill</a>
                        <a href="#contact">Contact</a>
                </div>
            </div>
        </>
    );
}
