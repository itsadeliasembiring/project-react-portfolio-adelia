// Import
import React from 'react'
import footer from '../img/footer.png'

export default function Contact() {
    return (
        <>
            {/* Contact */}
            {/* Contact-title */}
            <div className="contact-title" id="contact" data-aos="fade-down">
                <p>Connect with me</p>
            </div>
            {/* Contact-content */}
            <div className="contact-content" data-aos="fade-up">
                {/* Form */}
                <form>
                    <p><b>Name : </b></p>
                    <input type="text" className="input-field" placeholder="Your Name"/>
                    <p><b>Email : </b></p>
                    <input type="email" className="input-field" placeholder="Your Email"/>
                    <p><b>Message : </b></p>
                    <textarea type="text" className="input-field textarea-field" placeholder="Message"></textarea>
                    <button type="button" className="btn">Send Message</button>
                </form>
            </div>

            {/* Connect */}
                {/* title */}
            <div className="connect">
                <p>Connect with me:</p>
            </div>
                {/* icon */}
            <div className="contact-icon">
                <a href="https://www.linkedin.com/in/adelia-adel-38a96a211" target="_blank" className="home-contact-icon"><i className="uil uil-linkedin-alt" ></i></a>
                <a href="https://github.com/itsadeliasembiring?tab=repositories" className="home-contact-icon"  target="_blank"><i className="uil uil-github-alt"></i></a>
                <a href="https://www.instagram.com/adelialistic/" className="home-contact-icon"  target="_blank"><i className="uil uil-instagram"></i></a>    
            </div>

            {/* Footer */}
            <div className="footer">
                <img src={footer} alt="footer"/>
            </div>
        </>
    );
}
