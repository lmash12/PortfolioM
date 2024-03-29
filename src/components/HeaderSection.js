import React, { useState } from "react";
import "../Header.css";
import { NavLink } from "react-router-dom";
import image from "./img/les.jpg";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

const HeaderSection = () => {
  const navRef = useRef();
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    navRef.current.classList.toggle("active");
    setNavOpen(!isNavOpen);
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
                  isActive ? { color: " #9b7eda" } : { color: "#a9dc76" }
                }
                to="/"
                onClick={toggleNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="about page"
                style={({ isActive }) =>
                  isActive ? { color: " #9b7eda" } : { color: "#a9dc76" }
                }
                to="about"
                onClick={toggleNav}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="projects page"
                style={({ isActive }) =>
                  isActive ? { color: " #9b7eda" } : { color: "#a9dc76" }
                }
                to="projects"
                onClick={toggleNav}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="contact page"
                style={({ isActive }) =>
                  isActive ? { color: " #9b7eda" } : { color: "#a9dc76" }
                }
                to="contact"
                onClick={toggleNav}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-label="resume page"
                style={({ isActive }) =>
                  isActive ? { color: " #9b7eda" } : { color: "#a9dc76" }
                }
                to="resume"
                onClick={toggleNav}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <button
                className={`navBtn navClose ${isNavOpen ? "spin" : ""}`}
                onClick={toggleNav}
              >
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
