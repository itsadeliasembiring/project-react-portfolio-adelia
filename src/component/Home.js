import React from 'react'
import foto from '../img/foto.png'

export default function Home() {
    return (
        // Home
        <div className="home">
          {/* Home-left */}
            <div className="home-left">
                {/* Title */}
                <div className="home-title">
                    <h1>Hi!</h1>
                    <h1>I'm Adelia</h1>
                    <h1>Front-End Developer</h1>
                </div>
                {/* Button Download CV */}
                <div className="download"><a href="https://drive.google.com/file/d/1MwUvVOdJ-nnf5GrdHPhvndZ_V71CumIX/view?usp=sharing" className="button">Here My CV!</a></div>
                {/* Home-contact */}
                <div className="home-contact">
                    <a href="https://www.linkedin.com/in/adelia-adel-38a96a211" className="home-contact-icon"><i className="uil uil-linkedin-alt" target="_blank"></i></a>
                    <a href="https://github.com/itsadeliasembiring?tab=repositories" className="home-contact-icon"  target="_blank"><i className="uil uil-github-alt"></i></a>
                    <a href="https://www.instagram.com/adelialistic/" className="home-contact-icon"  target="_blank"><i className="uil uil-instagram"></i></a>    
                </div>
            </div>

            {/* Home-right */}
            <div className="home-rigt">
                {/* Foto */}
                <div className="foto">
                    <img src={foto} alt="Adelia"/>
                </div>
            </div>
        </div>
    );
}
