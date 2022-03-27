import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import About from "./components/About";

import Toronto from "./assets/toronto.png";

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

    // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    // const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    // const torus = new THREE.Mesh(geometry, material);
    // scene.add(torus);

    // const geometry = new THREE.BoxGeometry(4, 4, 4);
    // const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.y = 0;
    directionalLight.position.z = 1;
    scene.add(directionalLight);

    const directional_Light = new THREE.DirectionalLight(0xffffff);
    directional_Light.position.y = 0;
    directional_Light.position.z = 1;
    scene.add(directional_Light);

    camera.position.z = 5;

    const white = new THREE.Color(0xffffff);
    scene.background = white;

    // Create Objects on Mouse Click
    const mouse = new THREE.Vector2();
    const intersectionPoint = new THREE.Vector3();
    const planeNormal = new THREE.Vector3();
    const plane = new THREE.Plane();
    const raycaster = new THREE.Raycaster();

    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      planeNormal.copy(camera.position).normalize();
      plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
    });

    window.addEventListener("click", (e) => {
      const sphereGeo = new THREE.SphereGeometry(0.125, 30, 30);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0xffea00,
        metalness: 0,
        roughness: 0,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);
      sphereMesh.position.copy(intersectionPoint);
    });

    //Load background texture
    // const loader = new THREE.TextureLoader();
    // loader.load(Toronto, function (texture) {
    //   scene.background = texture;
    // });

    const animate = function () {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // cube.rotation.z += 0.01;
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
      <About id="about" />
      <Projects id="projects" />
      {/* <Photos /> */}
      <Footer />
    </div>
  );
}

export default App;

// tell react that reference we created (useRef(null)) -> should reference our <div> element by adding ref={mountRef} as an attribute

// replace document.body w/ mountRef.current to mount the scene to our referenced <div> element
