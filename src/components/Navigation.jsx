import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link className="text-link" to="/">
          <li>
            <b>IOURI</b>VOLKOV
          </li>
        </Link>
        <div className="middle">
          <Link className="text-link" to="/about">
            <li className="about">ABOUT</li>
          </Link>
          <Link className="text-link" to="/work">
            <li className="portfolio">WORK</li>
          </Link>
          <Link className="text-link" to="/photo">
            <li className="photo">PHOTO</li>
          </Link>
        </div>

        <Link className="text-link" to="/contact">
          <li className="contact">CONTACT ME</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
