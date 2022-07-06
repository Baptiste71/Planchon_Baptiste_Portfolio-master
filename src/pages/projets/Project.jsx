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
          <div className="presentationNormal bookiBorder">
            <div className="titleAndTxt">
              <h2 className="projectName booki">Projet Booki</h2>
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
          <div className="presentationReverse ohmyfoodBorder">
            <div className="titleAndTxt">
              <h2 className="projectName ohmyfood">Projet Ohmyfood</h2>
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
          <div className="presentationNormal laChouetteAgenceBorder">
            <div className="titleAndTxt">
              <h2 className="projectName laChouetteAgence">Projet La Chouette Agence</h2>
              <p className="projectDescription">
                Troisième projet professionnalisant de la formation OpenClassrooms, l'objectif de ce projet était l'optimisation d'un site web existant contenant un certain nombres d'erreurs et de mauvaises pratiques. Il a fallu faire un audit pour
                repérer toutes les erreurs visibles à œil sur le rendu du site web, contrôler les erreurs dans le code source et les modifiées. Pour mon cas l'utilisation de l'extension Lighthouse sur Chrome à été utilisée pour détecter les mauvaises
                pratiques SEO.
              </p>
            </div>
            <a className="miniatureLink" href="https://baptiste71.github.io/BaptistePlanchon_4_20012022/">
              <div className="miniatureProject">
                <img className="imgProject" src="img/miniature_la-chouette-agence.png" alt="miniature du projet La chouette agence" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
