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

    // const geometry = new THREE.BoxGeometry(3, 3, 3);
    // const material = new THREE.MeshBasicMaterial({ color: 0x000fff });
    // const cube = new THREE.Mesh(geometry, material);

    // scene.add(cube);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.y = 0;
    directionalLight.position.z = 1;
    scene.add(directionalLight);

    camera.position.z = 5;

    const white = new THREE.Color(0xffffff);
    scene.background = white;

    const animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    let onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

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

// tell react that reference we created (useRef(null)) -> should reference our <div> element by adding ref={mountRef} as an attribute

// replace document.body w/ mountRef.current to mount the scene to our referenced <div> element
