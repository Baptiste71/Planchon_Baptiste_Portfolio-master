import React from "react";
import { NavLink } from "react-router-dom";
import "./_navigation.scss";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EmailIcon from "@mui/icons-material/Email";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="direction">
        <NavLink className="home" to="/home">
          <span className="mobileIcon">
            <HomeIcon />
          </span>
          <li className="navDesktop">Accueil</li>
        </NavLink>
        <NavLink className="projects" to="/projects">
          <span className="mobileIcon">
            <WorkIcon />
          </span>
          <li className="navDesktop">Mes projets</li>
        </NavLink>
        <NavLink className="formation" to="/formation">
          <span className="mobileIcon">
            <SchoolIcon />
          </span>
          <li className="navDesktop">Ma formation</li>
        </NavLink>
        {/*<NavLink className="videoPresentation" to="/videopresentation">
          <span className="mobileIcon">
            <VideoLibraryIcon />
          </span>
          <li className="navDesktop">Presentation vidéo</li>
  </NavLink>*/}
        <NavLink className="contact" to="/contact">
          <span className="mobileIcon">
            <EmailIcon />
          </span>
          <li className="navDesktop">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
