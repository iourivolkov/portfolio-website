import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="logo">
          <a>
            <b>IOURI</b>VOLKOV
          </a>
        </li>
        <div className="middle-nav">
          <li>
            <a>about</a>
          </li>

          <li>
            <a>portfolio</a>
          </li>

          <li>
            <a>photo</a>
          </li>
        </div>

        <li className="contact">
          <a>contact me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
