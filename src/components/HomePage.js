import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import "animate.css";

const HomePage = () => {
  return (
    <div className="home-tag">
      <p>Hello! My Name Is</p>
      <h1 className="NameTag animate__animated animate__backInDown">
        Lesley Mashaya
      </h1>
      <p className="tagLine">
        Welcome to my portfolio! I'm a frontend developer who loves building and
        designing websites that make an impact. With a passion for creating
        beautiful and functional user interfaces, I work with a variety of tools
        and technologies to bring ideas to life. Take a moment to explore my
        work and see how I can help bring your next project to life. Thanks for
        stopping by to check out my portfolio. Let's connect and bring your
        ideas to life!
      </p>
      <div className="projectsBtn">
        <Link aria-label="projects page" to="/projects">
          Projects
        </Link>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Git</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
