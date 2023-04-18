import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>Hello! My Name Is</p>
      <h1 className="NameTag">Lesley Mashaya</h1>
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
        <Link aria-label="projects page" to="projects">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
