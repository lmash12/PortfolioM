import React from "react";
import "../Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Github Repo Search",
      description:
        "This project is a personal website that showcases my programming skills and experience by displaying all of my Github repositories in one place. The site utilizes an API to fetch and display each repository, and provides users with a brief description of the project, as well as a link to the Github repo.",
      githubLink: "https://github.com/lmash12/exam-project-alt-school",
      liveLink: "https://project-exam-88dbb.web.app/",
    },
    {
      id: 2,
      title: "Quotes Web App",
      description:
        "Bring inspiration to your day with the Random Quotes Generator. This app was created using React and an API call to retrieve quotes from a variety of sources, including famous figures and inspiring personalities. With just a click, receive a thought-provoking quote to keep you inspired and uplifted all day long.",
      githubLink: "https://github.com/lmash12/Free-Quotes-App",
      liveLink: "https://quotes-6a00c.web.app/",
    },
    {
      id: 3,
      title: "Random User Generator",
      description:
        "The Random User Generator is a React web app that utilizes an API call to generate randomized user data for testing and demonstration purposes. The app features a modular component architecture, efficient state management, and modern development tools for optimal performance and cross-browser compatibility.",
      githubLink: "https://github.com/lmash12/Assignment2",
      liveLink: "https://assignment-2-alt-school.web.app/",
    },
    {
      id: 4,
      title: "Counter App",
      description:
        "The Counter app is a Vue web application that allows users to increment and decrement a counter. With a minimalist design and intuitive user interface, the app is easy to use and perfect for basic counting needs. Built using Vue's component-based architecture, the app is scalable and easily extendable. ",
      githubLink: "https://github.com/lmash12/third-semester-project",
      liveLink: "https://counter-ce043.web.app/",
    },
    // add more projects here
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="links-container">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <FaGithub className="link" />
            </a>
            <button>
              <VscPreview className="link" />
            </button>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="link" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
