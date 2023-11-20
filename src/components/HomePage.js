import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import "../Header.css";
import { Link } from "react-router-dom";
import "animate.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const skills = useRef(null);

  useEffect(() => {
    const el = skills.current;
    gsap.fromTo(
      el,
      { y: 100 },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 2,
        scrollTrigger: {
          trigger: el,
        },
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      }
    );
  }, []);
  return (
    <div className="home-tag">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XY8FS9DWMQ"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-FGVQW6HX6D');
            `}
        </script>
      </Helmet>
      <p>Hello! My Name Is</p>
      <h1 className="NameTag animate__animated animate__backInDown">
        Lesley Mashaya
      </h1>
      <p className="tagLine">
        Welcome to my portfolio! I'm a frontend developer who loves building and
        designing websites that make an impact.
      </p>
      <div className="projectsBtn">
        <Link aria-label="projects page" to="/projects">
          Projects
        </Link>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul ref={skills}>
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
