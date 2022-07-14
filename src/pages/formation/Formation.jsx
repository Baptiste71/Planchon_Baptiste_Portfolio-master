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
        <div className="introduction">
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
              <a className="linkDegree" href="diplome/Attestation-de-réussite.pdf">
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
            <h3 className="introTitleDegree">Anglais</h3>
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
            <h3 className="introTitleDegree">Développement Web</h3>
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
            <div className="workExperiences">
              <h2 className="introTitleDegree"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
