// Import
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
                        <Link to="/project-react-portfolio-adelia/">Home</Link>
                        <Link to="/project-react-portfolio-adelia/about">About</Link>
                        <Link to="/project-react-portfolio-adelia/project">Project</Link>
                        <Link to="/project-react-portfolio-adelia/skill">Skill</Link>
                        <Link to="/project-react-portfolio-adelia/contact">Contact</Link>
                </div>
            </div>
        </>
    );
}