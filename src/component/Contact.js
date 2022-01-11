import React from 'react'

export default function Contact() {
    return (
        <>
            {/* Contact */}
            {/* Contact-title */}
            <div className="contact-title" id="contact">
                <h2>Contact</h2>
            </div>
            {/* Contact-content */}
            <div className="contact-content">
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
        </>
    );
}
