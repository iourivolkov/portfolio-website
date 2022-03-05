import "../styles/Projects.css";


const Projects = ({img, name, description, technology, links}) => {

  return (
    <div className="container">
      <h1 className="recent-work">BROWSE PROJECTS</h1>
      <div>
        <h2 className="past-project-links">Secret Lurry Society</h2>
        <h2 className="past-project-links">Scheduler</h2>
        <h2 className="past-project-links">Light Mart</h2>
        <h2 className="past-project-links">Tweeter</h2>
        <h2 className="past-project-links">Tiny App</h2>
      </div>
      
    </div>
  );
};

export default Projects;
