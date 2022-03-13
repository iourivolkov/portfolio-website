import React from "react";
import "../styles/Footer.css";
import styled from "styled-components";
import { ReactDOM } from "react";
import { SocialIcon } from "react-social-icons";

const StyledWrapper = styled.div`
  background-color: white;
  color: black;
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <section className="footer">
        <section className="footer-contact-info-left">
          <p>
            IOURI <b>VOLKOV</b> - Toronto, ON. All rights reserved.
          </p>
        </section>
        <section className="footer-social-icons-right">
          <SocialIcon
            url="https://www.linkedin.com/in/iourivolkov/"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            network="github"
            url="https://github.com/iourivolkov"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/ayureeee.sol/"
            style={{ height: 35, width: 35 }}
          />
        </section>
      </section>
    </StyledWrapper>
  );
};

export default Footer;
