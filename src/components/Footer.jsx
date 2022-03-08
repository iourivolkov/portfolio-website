import React from "react";
import "../styles/Footer.css";
import { StyledWrapper } from "../components/styled/Footer.styled.js";

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
          <p className="linkedin">LinkedIn</p>
          <p className="github">Github</p>
          <p className="photos">500px</p>
        </section>
      </section>
    </StyledWrapper>
  );
};

export default Footer;
