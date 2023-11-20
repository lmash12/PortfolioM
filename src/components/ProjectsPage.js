import React, { useState, useEffect, useRef } from "react";

import "../Projects.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

import project1 from "./img/project1-preview.png";
import project2 from "./img/project2-preview.png";
import project3 from "./img/project3-preview.png";
import project4 from "./img/project4-preview.png";
import project5 from "./img/project5-preview.png";
import project6 from "./img/project6-preview.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const projectRefs = useRef([]);
  const [previewProject, setPreviewProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Kamano Seed Limited (React Application)",
      description:
        "Kamano Seed Limited is a React web application that allows users to view the company's offerings. The application was built using React. The application is hosted on firebase and is fully responsive.",
      githubLink: "https://github.com/lmash12",
      liveLink: "https://kamano-9ebe7.web.app/",
      image: project1,
    },
    {
      id: 2,
      title: "Web Development Business Page",
      description:
        "This is a web development business page, built using HTML, CSS and JavaScript. The page is fully responsive and has a clean, simple and modern design.",
      githubLink: "https://github.com/lmash12/workpage",
      liveLink: "https://lmash12.github.io/workpage/",
      image: project5,
    },
    {
      id: 1,
      title: "Insure Landing Page",
      description:
        "This Insure Landing Page project is part of Frontend Mentor Challenges. For this project i decided to use Vanilla Javascript, HTML and CSS. The page is fully responsive and has accesibility features implemented. The site is hosted on Firebase.",
      githubLink: "https://github.com/lmash12/Insure",
      liveLink: "https://insure-dbf71.web.app/",
      image: project6,
    },
    {
      id: 3,
      title: "Bridal Lounge Landing Page",
      description:
        "Bridal Lounge is a website designed to help brides-to-be plan their perfect wedding. The website was built on reactjs and is hosted on firebase. The website is fully responsive and has a clean and modern design.",
      githubLink: "https://github.com/lmash12/bridal-lounge",
      liveLink: "https://bridal-lounge-ef4a7.web.app/",
      image: project3,
    },
    {
      id: 4,
      title: "Counter App",
      description:
        "The Counter app is a Vue web application that allows users to increment and decrement a counter. With a minimalist design and intuitive user interface, the app is easy to use and perfect for basic counting needs. Built using Vue's component-based architecture, the app is scalable and easily extendable. ",
      githubLink: "https://github.com/lmash12/third-semester-project",
      liveLink: "https://counter-ce043.web.app/",
      image: project4,
    },
    {
      id: 5,
      title: "Quotes Web App",
      description:
        "Bring inspiration to your day with the Random Quotes Generator. This app was created using React and an API call to retrieve quotes from a variety of sources, including famous figures and inspiring personalities. With just a click, receive a thought-provoking quote to keep you inspired and uplifted all day long.",
      githubLink: "https://github.com/lmash12/Free-Quotes-App",
      liveLink: "https://quotes-6a00c.web.app/",
      image: project2,
    },
  ];

  const handlePreview = (project) => {
    setPreviewProject(project);
  };

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      const anime = ref;
      gsap.from(anime, {
        y: 50,
        opacity: 0, // Initial state
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: anime,
          start: "top bottom", // Adjust this based on when you want the animation to start
          end: "bottom center", // Adjust this based on when you want the animation to end
          scrub: true,
        },
      });

      gsap.to(anime, {
        y: 0,
        opacity: 1, // Final state
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: anime,
          start: "top bottom", // Adjust this based on when you want the animation to start
          end: "bottom center", // Adjust this based on when you want the animation to end
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="projects">
      <h1>Projects.</h1>
      <p>Some of my work.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <h3>{project.title}</h3>
            <p style={{ wordSpacing: "1px" }}>{project.description}</p>
            <div className="links-container">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FaGithub className="link" />
              </a>
              <button onClick={() => handlePreview(project)}>
                <VscPreview className="link" />
              </button>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="link" />
              </a>
            </div>
          </div>
        ))}
      </div>
      {previewProject && (
        <div
          className="preview-container"
          onClick={() => setPreviewProject(null)}
        >
          <img src={previewProject.image} alt={previewProject.title} />
          <div className="preview-buttons">
            <button
              className="close-button"
              onClick={() => setPreviewProject(null)}
            >
              &times;
            </button>
            <a href={previewProject.liveLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
