import React from "react";
import "../Header.css";
import { NavLink } from "react-router-dom";
import image from "./img/les.jpg";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

const HeaderSection = () => {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("active");
  };
  return (
    <div>
      <header>
        <nav>
          <img src={image} alt="logo" />
          <ul ref={navRef} className="navBar">
            <li>
              <NavLink
                aria-label="Home page"
                style={({ isActive }) =>
                  isActive ? { color: " white" } : { color: "#a9dc76" }
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="about page"
                style={({ isActive }) =>
                  isActive ? { color: " white" } : { color: "#a9dc76" }
                }
                to="about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="projects page"
                style={({ isActive }) =>
                  isActive ? { color: " white" } : { color: "#a9dc76" }
                }
                to="projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="contact page"
                style={({ isActive }) =>
                  isActive ? { color: " white" } : { color: "#a9dc76" }
                }
                to="contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="resume page"
                style={({ isActive }) =>
                  isActive ? { color: " white" } : { color: "#a9dc76" }
                }
                to="resume"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <button className="navBtn navClose" onClick={toggleNav}>
                X
              </button>
            </li>
          </ul>
          <button className="navBtn" onClick={toggleNav}>
            <FaBars />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderSection;
