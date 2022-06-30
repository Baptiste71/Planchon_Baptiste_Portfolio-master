import React from "react";
import { NavLink } from "react-router-dom";
import "./_navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="direction">
        <NavLink className="home" to="/home">
          <li>Accueil</li>
        </NavLink>
        <NavLink className="projects" to="/projects">
          <li>Mes projet</li>
        </NavLink>
        <NavLink className="formation" to="/formation">
          <li>Ma formation</li>
        </NavLink>
        <NavLink className="videoPresentation" to="/videopresentation">
          <li>Presentation vidéo</li>
        </NavLink>
        <NavLink className="contact" to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
