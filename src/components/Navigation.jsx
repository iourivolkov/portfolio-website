import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <b>IOURI</b>VOLKOV
        </li>
        <div className="middle">
          <li className="about">about</li>
          <li className="portfolio">portfolio</li>
          <li className="photo">photo</li>
        </div>

        <li className="contact">contact me</li>
      </ul>
    </nav>
  );
};

export default Navigation;
