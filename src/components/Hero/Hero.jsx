import { useState } from 'react'
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <h1>Welcome to My Portfolio</h1>

      <h2>Hi, I'm Kishore 👋</h2>

      <p>
        A Passionate Front-End Web Developer from Bengaluru.
      </p>

      <div className="hero-button">
        <a href="#projects" className="btn">
          View My Work
        </a>

        <a href="#contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;