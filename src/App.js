import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
