import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import About from "./components/About";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <About />
      <Projects />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
