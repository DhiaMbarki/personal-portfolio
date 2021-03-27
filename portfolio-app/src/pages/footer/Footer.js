import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGoogle,
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons";
import './footer.css'

function Footer() {
  return (
    <div className="social-wrapper">
      <h2>You can get me here</h2>
      <a href="https://www.linkedin.com/in/dhia-mbarki-331270209/" className="youtube social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://www.facebook.com/Dhia.Tahri.22/" className="faFacebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzgqcSGHwnxPzhVXzmdnCBfzRnmFnbcgPPNvlzPnsMQrnLbWrkLBtzqDGWLvsrvHdvV" className="faGoogle social">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>

      <a href="https://github.com/DhiaMbarki" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
