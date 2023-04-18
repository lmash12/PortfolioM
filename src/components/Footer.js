import React from "react";
import "../Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <ul className="footer">
        <li>
          <a
            href="https://github.com/lmash12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn link"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/lmash12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter profile link"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+260978386755?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp contact link"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
