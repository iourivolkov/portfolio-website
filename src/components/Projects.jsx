import "../styles/Projects.css";

const Projects = ({ img, name, description, technology, links }) => {
  return (
    <div className="container">
      <h1 className="recent-work">BROWSE PROJECTS</h1>
      <div>
        <a href="https://github.com/iourivolkov/Lurry-Contract-Website">
          <h2 className="past-project-links">Secret Lurry Society</h2>
        </a>
        <a href="https://github.com/iourivolkov/scheduler">
          <h2 className="past-project-links">Scheduler</h2>
        </a>
        <a href="https://github.com/iourivolkov/LightMart">
          <h2 className="past-project-links">Light Mart</h2>
        </a>
        <a href="https://github.com/iourivolkov/tweeter-app">
          <h2 className="past-project-links">Tweeter</h2>
        </a>
        <a href="https://github.com/iourivolkov/tinyapp">
          <h2 className="past-project-links">Tiny App</h2>
        </a>
      </div>
    </div>
  );
};

export default Projects;
