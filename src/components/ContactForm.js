import React, { useState } from 'react';
import "../Style/Contact.css";

const ContactForm = () => {

// Submit The Form
  const [submitted, setSubmitted] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(apiKey, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <form className="row g-3" id='contact-form' onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="name" className="form-label">Name <span style={{color:"red"}}>*</span></label>
        <input type="text" className="form-control contact-input" id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="col-12">
        <label htmlFor="email" className="form-label">Email <span style={{color:"red"}}>*</span></label>
        <input type="email" className="form-control contact-input" id="email" name="email" placeholder="your@example.com" required />
      </div>
      <div className="col-12">
        <label htmlFor="message" className="form-label">Message <span style={{color:"red"}}>*</span></label>
        <textarea className="form-control contact-input" id="message" name="message" rows="4" placeholder="Your message..." required></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn contact-input" id='contact-btn'>Submit</button>
      </div>
      {submitted && <p className="success-message">Thank you for your message!</p>}
    </form>
  );
};

export default ContactForm;
