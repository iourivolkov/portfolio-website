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
    background-color: teal;
    color: white;
    border: none;
    font-weight: bold;
  }
  @media screen and (max-width: 390px) {
    font-size: 10px;
    border: none;
    font-weight: 700;
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
          {/* <li className="photo">PHOTO</li> */}
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
