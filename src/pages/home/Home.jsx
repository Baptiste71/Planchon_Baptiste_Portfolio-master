import React from "react";
import "./_home.scss";
import Navigation from "../../components/navigation/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="presentation">
        <div className="txt">
          <h1>Baptiste Planchon</h1>
          <p className="shortPresentation"></p>
          <button className="go">
            <NavLink className="btnGo" to="/experiences">
              Allons-y
            </NavLink>
          </button>
        </div>
        <div className="photoOfMe">
          <img className="me" src="img/photo_cv.jpg" alt="Photo de profil" />
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/baptiste-planchon-28603b219/";
            }}
          >
            <LinkedInIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://twitter.com/PaniKorZ";
            }}
          >
            <TwitterIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/Baptiste71";
            }}
          >
            <GitHubIcon />
          </button>
        </div>
        <p className="description">Réalisé avec React</p>
      </div>
    </div>
  );
};

export default Home;
