import React from "react";
import "./_home.scss";
import Navigation from "../../components/navigation/Navigation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage">
      <Navigation />
      <div className="mobilePage">
        <div className="presentation">
          <div className="txt">
            <h1>Baptiste Planchon</h1>
            <p className="shortPresentation">
              Je suis développeur web full stack. Je sors du cursus de formation d’OpenClassroom où j’y ai passé mon diplôme de développeur. Par le biais de plusieurs projets professionnalisants, j’ai appris les langages frontend (HTML5, CSS3, SASS,
              JavaScript ainsi que le Framework React) et backend (JavaScript, le Framework Express de Node.js, les bases de données SQL avec PostgreSQL et l’ORM Sequelize et les bases de données NoSQL avec MongoDB).
            </p>
            <button className="go" type="submit">
              <NavLink className="btnGo" to="/projects">
                Allons-y
              </NavLink>
            </button>
          </div>
        </div>
        <div className="homeFooter">
          <div className="linkButton">
            <button
              type="button"
              className="link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.linkedin.com/in/baptiste-planchon-28603b219/";
              }}
            >
              <LinkedInIcon className="iconSocialMedia" />
            </button>
            <button
              type="button"
              className="link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://twitter.com/PaniKorZ";
              }}
            >
              <TwitterIcon className="iconSocialMedia" />
            </button>
            <button
              type="button"
              className="link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://github.com/Baptiste71";
              }}
            >
              <GitHubIcon className="iconSocialMedia" />
            </button>
          </div>
          <div className="description">
            <p>Réalisé avec React</p>
          </div>
        </div>

        <div className="photoOfMe">
          <img className="me" src="img/photo_cv.jpg" alt="Photo de profil" />
        </div>
      </div>
    </div>
  );
};

export default Home;
