import React from "react";
import "./ContactSection.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>Let's get in touch! Fill out the form below or email me at <a href="mailto:malkit@example.com">malkit@example.com</a>.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
