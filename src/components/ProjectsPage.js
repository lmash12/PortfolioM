import React, { useState } from "react";
import "../Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import project1 from "./img/project1-preview.png";
import project2 from "./img/project2-preview.jpg";
import project3 from "./img/project3-preview.png";
import project4 from "./img/project4-preview.png";

const ProjectsPage = () => {
  const [previewProject, setPreviewProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Github Repo Search",
      description:
        "This project is a personal website that showcases my programming skills and experience by displaying all of my Github repositories in one place. The site utilizes an API to fetch and display each repository, and provides users with a brief description of the project, as well as a link to the Github repo.",
      githubLink: "https://github.com/lmash12/exam-project-alt-school",
      liveLink: "https://project-exam-88dbb.web.app/",
      image: project1,
    },
    {
      id: 2,
      title: "Quotes Web App",
      description:
        "Bring inspiration to your day with the Random Quotes Generator. This app was created using React and an API call to retrieve quotes from a variety of sources, including famous figures and inspiring personalities. With just a click, receive a thought-provoking quote to keep you inspired and uplifted all day long.",
      githubLink: "https://github.com/lmash12/Free-Quotes-App",
      liveLink: "https://quotes-6a00c.web.app/",
      image: project2,
    },
    {
      id: 3,
      title: "Landing Page",
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
    // add more projects here
  ];

  const handlePreview = (project) => {
    setPreviewProject(project);
  };
  return (
    <div className="projects">
      <h1>Projects.</h1>
      <p>Some of the projects I have worked on.</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
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
