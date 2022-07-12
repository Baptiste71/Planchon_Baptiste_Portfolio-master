import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Spinner from "../../components/spinner/Spinner";
import "./_formation.scss";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

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
      </div>
    </div>
  );
};

export default Formation;
