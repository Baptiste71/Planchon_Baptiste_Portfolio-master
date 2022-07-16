import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./_contact.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FolderIcon from "@mui/icons-material/Folder";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="introductionContact">
        <h1 className="introTitleContact">Contact</h1>
        <p className="introTxt contact">Sur cette page vous y trouverez les principaux canaux pour me contacter si vous avez trouvé ce portfolio intéressant.</p>
      </div>
      <div className="contactMethod">
        <div className="component">
          <div className="icon">
            <PhoneIcon className="contactIcon" />
          </div>
          <p className="componentDescription">0650230372</p>
        </div>
        <div className="component">
          <div className="icon">
            <EmailIcon className="contactIcon" />
          </div>
          <p className="componentDescription">planchonbaptiste@gmail.com</p>
        </div>
        <div className="component">
          <div className="icon">
            <LinkedInIcon className="contactIcon" />
          </div>
          <p className="componentDescription">
            <a className="componentDescriptionLink" href="https://www.linkedin.com/in/baptiste-planchon-28603b219/">
              Mon profil LinkedIn
            </a>
          </p>
        </div>
        <div className="component">
          <div className="icon">
            <TwitterIcon className="contactIcon" />
          </div>
          <p className="componentDescription">
            <a className="componentDescriptionLink" href="https://twitter.com/PaniKorZ">
              Mon profil Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="curriculumVitae">
        <a className="linkCv" href="diplome/BaptistePlanchon_CV.pdf">
          <button type="button" className="iconDiploma">
            <FolderIcon />
          </button>
        </a>
        <p className="cvDescription">Vous souhaitez télécharger mon CV ? C'est très simple il vous suffit juste de cliquer de le bouton pour avoir accès au fichier PDF.</p>
      </div>
    </div>
  );
};

export default Contact;
