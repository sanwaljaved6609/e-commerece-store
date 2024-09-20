import React from "react";
import { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    console.log("Form submitted", { name, email, message });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
          {submitted && (
            <p className="success-msg">Thank you for contacting us!</p>
          )}
        </form>

        <div className="contact-details">
          <h3>Our Store Location</h3>
          <p>1234 E-Commerce St, Suite 101, Your City, YZ 12345</p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.00697881205!2d-118.69192027186745!3d34.020161294764215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b6e9eac65d%3A0x37e6b1d37f5c39e7!2sE-Commerce%20Store!5e0!3m2!1sen!2sus!4v1631771323693!5m2!1sen!2sus"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="Store Location"
          ></iframe>
          <p>Email: support@ms-shop.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Opening Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
