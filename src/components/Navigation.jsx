import "../styles/Navigation.css";

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
          <li className="photo">PHOTO</li>
        </div>

        <li className="contact">CONTACT ME</li>
      </ul>
    </nav>
  );
};

export default Navigation;
