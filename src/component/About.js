import React from 'react'
import foto2 from '../img/foto2.png'

export default function About() {
    return (
        <>
            {/* About */}
            <div className="about" id="about">
                {/* About-content */}
                <div className="about-content-introduction">
                    {/* Foto */}
                    <img src={foto2} alt="fotoadelia" className="foto2" data-aos="fade-right"/>
                    {/* Deskripsi */}
                    <div className="about-description">
                        <p className='name' data-aos="fade-down">Hello! My name is <b>Adelia</b></p>
                        <p data-aos="fade-up">Hi! I'm Adelia from Bekasi. I'm a junior front-end developer and studies at a vocational highschool majoring in Software Engineering. I am currently undergoing an internship program <br/>at the Brilyan Trimatra Utama Company.</p>
                        <br/>
                        <p data-aos="fade-up">I have interested in front-end website and artificial intelligence.<br/>I hope i can create many project and show to you in this portfolio.<br/>I will upgrade this portfolio, stay tune my new project!</p>
                    </div>
                </div>
                {/* <div className='about-content-experience'>
                    <div className='experience-title'>
                        <p>My Experience</p>
                    </div>
                </div> */}
            </div>
        </>
    );
}
