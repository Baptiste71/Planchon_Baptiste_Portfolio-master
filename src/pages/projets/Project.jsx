import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./_project.scss";

const Experiences = () => {
  return (
    <div className="projectPage">
      <Navigation />
      <div className="presentationProject">
        <div className="introduction">
          <h1 className="introTitle">Mes projets professionalisants</h1>
          <p className="introTxt">Sur cette page vous y trouverez tout les projets proffesionalisants réalisés lors de ma formation avec OpenClassroom avec un petit descriptif de l'objectif du projet et la possibilité de le parcourir</p>
        </div>
        <div className="Projects">
          <div className="presentationNormal">
            <div className="titleAndTxt">
              <h2 className="projectName">Projet Booki</h2>
              <p className="projectDescription">
                Premier projet professionnalisant avec la formation Développeur web d'OpenClassrooms, l'objectif du projet était de reproduire à partir d'une maquette donnée, le prototype d'un site web de réservation de vacances à Marseille. Pour ce
                projet, il était nécessaire d'acquérir les compétences sur les langages HTML5 & CSS3 et le Responsive Design
              </p>
            </div>
            <a className="miniatureLink" href="https://baptiste71.github.io/P2_PlanchonBaptiste/">
              <div className="miniatureProject">
                <img className="imgProject" src="img/miniature_booki.png" alt="miniature du projet Booki" />
              </div>
            </a>
          </div>
          <div className="presentationReverse">
            <div className="titleAndTxt">
              <h2 className="projectName">Projet Ohmyfood</h2>
              <p className="projectDescription">
                Second projet professionnalisant avec l'organisme OpenClassrooms, l'objectif de ce projet était de faire un site web vitrine pour une entreprise qui partage des menus de restaurants sur son site web. Pour ce faire une maquette était
                donnée en mobile first et il fallait donc adapter le site en format tablette et desktop. Les compétences utilisées en plus d'HTML5 & CSS3 ont été l'utilisation de SASS et la création d'animation CSS pour chaque pages.
              </p>
            </div>
            <a className="miniatureLink" href="https://baptiste71.github.io/BaptistePlanchon_3_06122021/">
              <div className="miniatureProject">
                <img className="imgProject" src="img/miniature_ohmyfood.png" alt="miniature du projet Ohmyfood" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
