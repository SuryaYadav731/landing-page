import React from "react";
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#help">Help Center</a>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100077367023818" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/surya-yadav-b51007218/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/sparks__surya731/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright and Design Credit Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Designed by <a href="https://www.linkedin.com/in/surya-yadav-b51007218/" target="_blank" rel="noopener noreferrer">Surya Yadav</a></p>
      </div>
    </footer>
  );
};

export default Footer;
