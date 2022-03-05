import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Projects />
      <Photos />
    </div>
  );
}

export default App;
