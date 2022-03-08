import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link to="/">
          <li>
            <b>IOURI</b>VOLKOV
          </li>
        </Link>
        <div className="middle">
          <Link to="/about">
            <li className="about">ABOUT</li>
          </Link>
          <Link to="/work">
            <li className="portfolio">WORK</li>
          </Link>
          <Link to="/photo">
            <li className="photo">PHOTO</li>
          </Link>
        </div>

        <Link to="/contact">
          {" "}
          <li className="contact">CONTACT ME</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
