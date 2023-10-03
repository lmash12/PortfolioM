import React from "react";
import "../Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="card">
        <span>Click here!</span>
        <a
          className="social-link"
          href="https://twitter.com/lmash12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter profile link"
        >
          <FaTwitter className="icon twitter" />
        </a>
        <a
          className="social-link"
          href="https://github.com/lmash12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/lesley-mashaya-428b97278/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn link for Lesley Mashaya"
        >
          <FaLinkedinIn className="icon linkedin" />
        </a>
        <a
          className="social-link"
          href="https://wa.me/+260978386755?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp contact link"
        >
          <FaWhatsapp className="icon whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
