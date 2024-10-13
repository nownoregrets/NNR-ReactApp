import React from 'react'
import "../App.css";
import "../Style/Contact.css";
// All Components
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <main>
            {/* Contact Hero */}
            <section id="contact-hero">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>Feel free to reach out to us anytime. Whether you have questions, need assistance, or want to discuss opportunities, we’re here to help! Let’s connect.</p>
                </div>
            </section>

            {/* Form Section */}
            <section className="d-flex" id="form-section">
                {/* Form Left */}
                <div
                    className="d-flex flex-column justify-content-evenly align-items-center text-white mx-5"
                    id="form-left"
                >
                    <span className='icon-box'>
                        <i className="fa fa-envelope" style={{ color: "#1E1E1E" }}></i>
                        <a href="mailto:nownoregrets@gmail.com">nownoregrets@gmail.com</a>
                    </span>

                    <span className='icon-box' style={{ width: "70%" }}>
                        <i className="fa fa-globe" style={{ color: "#1E1E1E" }}></i>
                        <a href="https://nownoregrets.com/">nownoregrets.com</a>
                    </span>

                    <span className='icon-box' style={{ width: "60%" }}>
                        <i className="fa fa-phone" style={{ color: "#1E1E1E" }}></i>
                        <a href="tel:+923039626195">0303-9626195</a>
                    </span>
                    <h3>Social Accounts</h3>
                    <span className='icon-box' style={{ width: "60%" }}>
                        <a href="https://www.youtube.com/@nownoregrets/"><i className="s-icons fa fa-youtube-play" style={{ color: "#1E1E1E" }}> </i></a>

                        <a href="https://www.facebook.com/nownoregrets"><i className="s-icons fa fa-facebook" style={{ color: "#1E1E1E" }}> </i></a>

                        <a href="https://www.instagram.com/nownoregrets"><i className="s-icons fa fa-instagram" style={{ color: "#1E1E1E" }}> </i></a>
                    </span>

                </div>

                {/* Form Right */}
                <div className="container d-flex" id="form-right">
                    <h3 style={{fontWeight:"bold"}}>Fill This Form</h3>
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}

export default Contact
