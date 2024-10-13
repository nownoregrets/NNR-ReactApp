import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            We are committed to providing exceptional services that meet the needs of our clients and contribute to their success.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light">Home</Link></li>
                            <li><Link to="/about" className="text-light">About Us</Link></li>
                            <li><Link to="/contact" className="text-light">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p>
                            Email: nownoregrets@gmail.com<br />
                            Phone: +92-3039626195<br />
                            Website: www.nownoregrets.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark">
                © {new Date().getFullYear()} Now No Regrets. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
