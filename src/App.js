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
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    // scene is appended directly to the document body
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <div ref={mountRef}>
        <LandingPage />
      </div>

      <About />
      <Projects />
      {/* <Photos /> */}
      <Footer />
    </div>
  );
}

export default App;
