import { useState } from 'react'
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Kishore | Built with React & Vite</p>

      <p>📧 beerekishore32323@gmail.com</p>

      <div className="footer-links">
        <a
          href="https://github.com/Krish1506"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <span>|</span>

        <a
          href="https://www.linkedin.com/in/beere-kishore-1a6780422/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;