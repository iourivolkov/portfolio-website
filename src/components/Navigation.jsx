import "../styles/Navigation.css";
import { Link } from "react-router-dom";

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

        <li className="contact">CONTACT ME</li>
      </ul>
    </nav>
  );
};

export default Navigation;
