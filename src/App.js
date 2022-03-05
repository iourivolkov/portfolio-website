import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Projects />
    </div>
  );
}

export default App;
