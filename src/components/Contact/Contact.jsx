import { useState } from 'react'
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;