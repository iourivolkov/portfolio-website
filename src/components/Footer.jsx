import React from "react";
import "../styles/Footer.css";
import styled from "styled-components";
import { ReactDOM } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer">
        <section className="footer-contact-info-left">
          <p>
            IOURI <b>VOLKOV</b> - Toronto, ON. All rights reserved.
          </p>
        </section>
        <section className="footer-social-icons-right">
          <SocialIcon
            className="linkedIn"
            url="https://www.linkedin.com/in/iourivolkov/"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            className="github"
            network="github"
            url="https://github.com/iourivolkov"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            className="instagram"
            network="instagram"
            url="https://www.instagram.com/ayureeee.sol/"
            style={{ height: 35, width: 35 }}
          />
        </section>
      </section>
    </div>
  );
};

export default Footer;
