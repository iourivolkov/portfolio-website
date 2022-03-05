import "../styles/Projects.css";


const Projects = ({img, name, description, technology, links}) => {

  return (
    <div className="container">
      <h1 className="recent-work">BROWSE PROJECTS</h1>
      <div className="past-project-links">
        <h2>Secret Lurry Society</h2>
        <h2>Scheduler</h2>
        <h2>Light Mart</h2>
        <h2>Tweeter</h2>
        <h2>Tiny App</h2>
      </div>
      
    </div>
  );
};

export default Projects;
