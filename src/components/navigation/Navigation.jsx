import React from "react";
import { NavLink } from "react-router-dom";
import "./_navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/experiences">
          <li>Mes experiences</li>
        </NavLink>
        <NavLink to="/formation">
          <li>Ma formation</li>
        </NavLink>
        <NavLink to="/videopresentation">
          <li>Presentation vidéo</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
