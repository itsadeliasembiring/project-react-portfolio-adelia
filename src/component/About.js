import React from 'react'
import foto2 from '../img/foto2.png'

export default function About() {
    return (
        <>
            {/* About */}
            <div className="about" id="about">
                {/* About-title */}
                <div className="about-title">
                    <h2>About me</h2>
                </div>
                {/* About-content */}
                <div className="about-content">
                    {/* Foto */}
                    <img src={foto2} alt="fotoadelia" className="foto2"/>
                    {/* Deskripsi */}
                    <div className="about-description">
                        <h2>I'm Adelia</h2>
                        <p>Hello! My name is Adelia.<br/>I'm a student of vocational high school majoring in software engineering.<br/>I have interested in front end website and artificial intelligence. </p>
                    </div>
                </div>
            </div>
        </>
    );
}
