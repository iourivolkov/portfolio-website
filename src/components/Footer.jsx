import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
