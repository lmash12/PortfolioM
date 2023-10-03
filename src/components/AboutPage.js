import React from "react";
import "../Contact.css";
import { FaRegHandPointDown } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About.</h1>
      <p>
        Hi, I'm Lesley, a Frontend Developer. With my expertise in web
        development, I've spent years collaborating with clients to transform
        their web application concepts into visually captivating,
        high-performance platforms. Driven by my unwavering passion for web
        development, I ensure that I meet project deadlines and budgets, all the
        while embracing continuous learning. Let's embark on a journey to craft
        remarkable solutions together.
      </p>

      <span>Reach out on any of the links below</span>
      <span>
        <FaRegHandPointDown />
      </span>
    </div>
  );
};

export default AboutPage;
