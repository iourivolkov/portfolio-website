import "../styles/Navigation.css";

import styled from "styled-components";

import { Link, animateScroll as scroll } from "react-scroll";

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
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="about">ABOUT</li>
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="portfolio">WORK</li>
          </Link>
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
