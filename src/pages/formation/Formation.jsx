import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Spinner from "../../components/spinner/Spinner";
import "./_formation.scss";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

const Formation = () => {
  return (
    <div>
      <Navigation />
      <Spinner />
      <div className="presentationFormation">
        <div className="introductionFormation">
          <h1 className="introTitleFormation">Ma Formation</h1>
          <p className="introTxt formation">Sur cette page vous y trouverez les principales formations que j'ai suivies jusqu'a aujourd'hui ainsi que des certifications et mes expériences profesionnelles précédentes.</p>
        </div>
        <div className="sectionDegree">
          <h2 className="introTitleDegree">Mes diplômes principaux</h2>
          <div className="diploma">
            <div className="iconAndDescription">
              <a className="linkDegree" href="diplome/BEP_MPEI.pdf">
                <button type="button" className="iconDiploma">
                  <WorkspacePremiumIcon />
                </button>
              </a>
              <div className="descriptionDiploma">Brevet d'Etudes Professionnelles Maintenance des produits et équipements industriels (MPEI).</div>
            </div>
            <div className="iconAndDescription">
              <a className="linkDegree" href="diplome/BacPro.pdf">
                <button type="button" className="iconDiploma">
                  <WorkspacePremiumIcon />
                </button>
              </a>
              <div className="descriptionDiploma">Baccalauréat Professionnel Maintenance des équipements industriels (MEI).</div>
            </div>
            <div className="iconAndDescription">
              <a className="linkDegree" href="diplome/diplome_OC_signe.pdf">
                <button type="button" className="iconDiploma">
                  <WorkspacePremiumIcon />
                </button>
              </a>
              <div className="descriptionDiploma">Formation professionnelle reconnue Bac+2 Développeur Web. </div>
            </div>
          </div>
        </div>
        <div className="sectionCertification">
          <h2 className="introTitleCertification">Mes certifications principales</h2>
          <div className="english">
            <h3 className="introTitleDegree En">Anglais</h3>
            <div className="diploma">
              <div className="iconAndDescription">
                <a className="linkDegree" href="diplome/certificat_B2.pdf">
                  <button type="button" className="iconDiploma">
                    <SchoolIcon />
                  </button>
                </a>
                <div className="descriptionDiploma">Certificat de niveau B2 d'anglais.</div>
              </div>
              <div className="iconAndDescription">
                <a className="linkDegree" href="diplome/niveauC1_Anglais.pdf">
                  <button type="button" className="iconDiploma">
                    <SchoolIcon />
                  </button>
                </a>
                <div className="descriptionDiploma">Validation des exercices de niveau C1.</div>
              </div>
            </div>
          </div>
          <div className="webDev">
            <h3 className="introTitleDegree Dev">Développement Web</h3>
            <div className="diplomaDev">
              <div className="ligne1">
                <div className="iconAndDescription">
                  <a className="linkDegree" href="diplome/integration_maquette.pdf">
                    <button type="button" className="iconDiploma">
                      <SchoolIcon />
                    </button>
                  </a>
                  <div className="descriptionDiploma">Certificat de réussite des cours OpenClassrooms sur le découpage et l'intégration des maquettes.</div>
                </div>
                <div className="iconAndDescription">
                  <a className="linkDegree" href="diplome/HTML5_CSS3.pdf">
                    <button type="button" className="iconDiploma">
                      <SchoolIcon />
                    </button>
                  </a>
                  <div className="descriptionDiploma">Certificat de réussite des cours OpenClassrooms sur les langages HTML5 et CSS3.</div>
                </div>
                <div className="iconAndDescription">
                  <a className="linkDegree" href="diplome/Sass.pdf">
                    <button type="button" className="iconDiploma">
                      <SchoolIcon />
                    </button>
                  </a>
                  <div className="descriptionDiploma">Certificat de réussite des cours OpenClassrooms sur Sass.</div>
                </div>
              </div>
              <div className="ligne2">
                <div className="iconAndDescription">
                  <a className="linkDegree" href="diplome/JavaScript.pdf">
                    <button type="button" className="iconDiploma">
                      <SchoolIcon />
                    </button>
                  </a>
                  <div className="descriptionDiploma">Certificat de réussite des cours OpenClassrooms sur le langage JavaScript.</div>
                </div>
                <div className="iconAndDescription">
                  <a className="linkDegree" href="diplome/nodeJS_Express_MongoDB.pdf">
                    <button type="button" className="iconDiploma">
                      <SchoolIcon />
                    </button>
                  </a>
                  <div className="descriptionDiploma">Certificat de réussite des cours OpenClassrooms sur la partie Backend avec Node.Js, Express et MongoDB.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="workExperiences">
          <h2 className="introTitleWork">Mes expériences profesionnelles</h2>
          <div className="allWorkExperiences">
            <div className="job">
              <h3 className="jobName">Employé Libre-service</h3>
              <p className="jodDate">Du 14 Octobre 2013 au 9 Novembre 2013</p>
              <p className="jobDescription">
                Au sein d'une entreprise de grande distribution, mon rôle était de mettre en rayon les liquides c'est à dire eau, soda, alcool, etc... Je devais également quelques fois par semaine prêter main forte pour la mise en rayons des produits
                frais. <br /> Il s'agissait d'un contrat en CDD.
              </p>
            </div>
            <div className="job">
              <h3 className="jobName">Technicien Enduction</h3>
              <p className="jodDate">Du 2 Décembre 2013 au 6 Décembre 2013</p>
              <p className="jobDescription">
                Au sein d'une entreprise pharmaceutique, mon rôle était de préparer une masse collante à partir d'une recette bien spécifique et de l'appliquée aprés un temps minimum de malaxage sur des bandes de tissu destinés à la fabrication de
                pansements. <br /> Il s'agissait d'un contrat d'interim d'une semaine.
              </p>
            </div>
            <div className="job">
              <h3 className="jobName">Technicien de production</h3>
              <p className="jodDate">Du 1 Avril 2014 au 21 Décembre 2018</p>
              <p className="jobDescription">
                Au sein d'une entreprise de mécanique de précision et d'injection plastique, mon rôle était de régler les presses à injecter avant la mise en production, d'effectuer la maintenance préventive et curative des presses, de gérer le stock
                de matières premières, de gérer le service qualité et de gérer une équipe de 10 personnes à partir du 14 Décembre 2015. <br />
                Il s'agissait d'un contrat en CDI.
              </p>
            </div>
            <div className="job">
              <h3 className="jobName">Ajusteur-Monteur</h3>
              <p className="jodDate">Du 27 Juin 2019 au 11 Juin 2021</p>
              <p className="jobDescription">
                Au sein d'une entreprise de mécanique de précision spécialisée dans la création de moule pour l'injection plastique, mon rôle était d'ajuster la fermeture du moule afin de le rendre étanche lors de la phase d'injection et d'ajuster
                également toutes les parties amovibles du moule comme les cales ou les éjécteurs par exemple. Je devais aussi monter tous les éléments auxiliaires du moule comme par exemple des vérins pneumatique, des poignées de transports, etc...{" "}
                <br />
                Il s'agissait d'un contrat en CDI.
              </p>
            </div>
            <div className="job">
              <h3 className="jobName">Technicien Enduction</h3>
              <p className="jodDate">Du 14 Juin 2021 au 30 Septembre 2021</p>
              <p className="jobDescription">
                Au sein d'une entreprise pharmaceutique, mon rôle était de préparer une masse collante à partir d'une recette bien spécifique et de l'appliquée aprés un temps minimum de malaxage sur des bandes de tissu destinés à la fabrication de
                pansements. Je devais également assurer la maintenance préventive du four de séchage afin d'éviter les opérations de maintenance curative et donc une perte de production. <br /> Il s'agissait d'un contrat en CDI.
              </p>
            </div>
            <div className="job">
              <h3 className="jobName">Dévéloppeur web</h3>
              <p className="jodDate">Du 5 Octobre 2021 au 2 Juin 2022</p>
              <p className="jobDescription">
                Au sein de l'organisme de formations en ligne OpenClassrooms, j'ai effectuer la formation Développeur web niveau bac +2 dans le but de me reconvertir professionnellement. Par le biais de cette formation, il y a eu six projets
                profesionnalisants que vous avez pu découvrir la page précédente ainsi que un, le premier des sept, dont l'objectif était d'apprendre à apprendre seul, de faire le point sur nos soft et hard skills ainsi que de faire une veille
                technologique. <br /> Il s'agissait d'une formation professionnelle initialement d'une durée de six mois, j'ai préféré prendre mon temps pour la faire afin d'avoir la certitude de faire les chose correctement et de bien comprendre
                chaque projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
