import "../styles/Navigation.css";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ContactBtn = styled.button`
  border: solid black 2px;
  width: 120px;
  height: 30px;
  text-align: center;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgb(210, 50, 22);
    color: white;
    border: none;
    font-weight: bold;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <b>IOURI</b>VOLKOV
        </li>

        <div className="middle">
          <li className="about">ABOUT</li>

          <li className="portfolio">WORK</li>
        </div>
        <a href="mailto:volk.iouri@gmail.com">
          <ContactBtn>CONTACT ME</ContactBtn>
        </a>
        {/* <li className="contact">CONTACT ME</li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
