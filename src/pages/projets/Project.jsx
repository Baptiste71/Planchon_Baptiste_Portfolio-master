import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Spinner from "../../components/spinner/Spinner";
import FeedbackIcon from "@mui/icons-material/Feedback";
import "./_project.scss";

const Experiences = () => {
  return (
    <div className="projectPage">
      <Navigation />
      <Spinner />
      <div className="presentationProject">
        <div className="introduction">
          <h1 className="introTitle">Mes projets professionalisants</h1>
          <p className="introTxt">Sur cette page vous y trouverez tout les projets profesionnalisants réalisés lors de ma formation avec OpenClassroom avec un petit descriptif de l'objectif du projet et la possibilité de le parcourir</p>
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
          <div className="presentationReverse kanapBorder">
            <div className="titleAndTxt">
              <h2 className="projectName kanap">Projet Kanap</h2>
              <p className="projectDescription">
                Quatrième projet professionnalisant de la formation OpenClassrooms, l'objectif de ce projet était de faire le lien en JavaScript entre la partie frontend d'un site e-commerce qui vend des canapés et une API qui possède toutes les
                données des canapés à vendre. Pour ce faire il y a eu l'utilisation des requêtes Fetch GET et POST.
              </p>
              <p className="attention">
                <FeedbackIcon className="attentionIcon" /> Pour visualiser le rendu final vous devez suivre le lien ci-dessous, il s'agit du repository du backend du site et suivre les instructions du ReadMe il s'agit juste d'ouvrir un terminal et de
                taper la commande suivante: node server <br />
                <a href="https://github.com/Baptiste71/BaptistePlanchon_5_02022022_Back">Repository Github Backend</a>
              </p>
            </div>
            <a className="miniatureLink" href="https://baptiste71.github.io/BaptistePlanchon_5_02022022/">
              <div className="miniatureProject">
                <img className="imgProject" src="img/miniature_kanap.png" alt="miniature du projet Kanap" />
              </div>
            </a>
          </div>
          <div className="presentationNormal piiquanteBorder">
            <div className="titleAndTxt">
              <h2 className="projectName piiquante">Projet Piiquante</h2>
              <p className="projectDescription">
                Cinquième projet professionnalisant de la formation OpenClassrooms, l'objectif du projet était de créer la partie backend, le but étant qu'au final les utilisateurs puissent ce créer un compte utilisateur, ce déconnecter et ce
                reconnecter, ajouter des sauces piquantes, modifier ou supprimer la sauce si l'utilisateur en est bel et bien l'auteur et liker/disliker les sauces présente sur l'application. Pour ce faire, il y a eu l'utilisation du Framework
                Express de Node.js, du JavaScript et de la base de données MongoDB.
              </p>
              <p className="attention">
                <FeedbackIcon className="attentionIcon" /> Pour visualiser le rendu final, il vous faudra vous rendre dans les deux repositories front et back liens ci-dessous et suivre les instructions des readme pour chacun d'entre eux : <br />
              </p>
              <div>
                <a className="linkGithub" href="https://github.com/Baptiste71/BaptistePlanchon_6_19032022-Front">
                  Repository Github Frontend
                </a>
                <br />
                <a href="https://github.com/Baptiste71/Baptiste_Planchon_6_19032022_Back">Repository Github Backend</a>
              </div>
            </div>
            <a className="miniatureLink" href="https://github.com/Baptiste71/BaptistePlanchon_6_19032022-Front">
              <div className="miniatureProject">
                <img className="imgProject" src="img/miniature_piiquante.png" alt="miniature du projet piiquante" />
              </div>
            </a>
          </div>
          <div className="presentationReverse groupomaniaBorder">
            <div className="titleAndTxt">
              <h2 className="projectName groupomania">Projet Groupomania</h2>
              <p className="projectDescription">
                Sixième et dernier projet professionnalisant de l'organisme OpenClassrooms, l'objectif de ce projet était de partir d'une feuille blanche et de réaliser un réseau social d'entreprise en fonction des demandes présentes sur le cahier
                des charges du client. Pour ce faire, il y a eu l'utilisation de Figma pour la création d'une maquette, le Framework React pour la partie frontend, le Framework Express pour la partie backend l'ORM Sequelize et PostgreSQL pour la base
                de données.
              </p>
              <p className="attention">
                <FeedbackIcon className="attentionIcon" /> Pour visualiser le rendu final, vous devez vous rendre sur les deux repositories front et back liens ci-dessous, et suivre les instructions demandées dans les readme : <br />
                <a href="https://github.com/Baptiste71/Planchon_Baptiste_7_09042022_Front">Repository Github Frontend</a>
                <br />
                <a href="https://github.com/Baptiste71/Planchon_Baptiste_7_09042022_Back">Repository Github Backend</a>
              </p>
            </div>
            <a className="miniatureLink" href="https://github.com/Baptiste71/Planchon_Baptiste_7_09042022_Front">
              <div className="miniatureProject">
                <img className="imgProject" src="img\miniature_groupomania.png" alt="miniature du projet Groupomania" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
