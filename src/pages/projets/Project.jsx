import React from "react";
import Navigation from "../../components/navigation/Navigation";

const Experiences = () => {
  return (
    <div className="projectPage">
      <Navigation />
      <div className="presentationProject">
        <div className="introduction">
          <h1 className="introTitle">Mes projets professionalisants</h1>
          <p className="introTxt">Sur cette page vous y trouverez tout les projets proffesionalisants réalisés lors de ma formation avec OpenClassroom avec un petit descriptif de l'objectif du projet et la possibilité de le parcourir</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
