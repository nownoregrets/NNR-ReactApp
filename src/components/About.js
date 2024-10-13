import React from 'react';
import "../App.css";
import "../Style/About.css";

const About = () => {
    return (
        <main>
            {/* About Hero */}
            <section id="about-hero">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Learn more about our mission, vision, and the impact of our services.</p>
                </div>
            </section>

            {/* About Content Section */}
            <section id="about-content" className="d-flex">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>We strive to provide exceptional services that meet the needs of our clients and contribute to their success.</p>
                </div>

                <div className="container">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                        <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
                        <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
                    </ul>
                </div>
            </section>

            {/* Our Impact Section */}
            <section id="impact-section" className="d-flex">
                <div className="container">
                    <h2>Our Impact</h2>
                    <p>We believe in making a positive impact in our community through:</p>
                    <ul>
                        <li>Empowering local businesses with innovative solutions.</li>
                        <li>Creating opportunities for education and skills development.</li>
                        <li>Promoting sustainability and ethical practices in all our operations.</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default About;
