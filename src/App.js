import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import About from "./components/About";
import styled from "styled-components";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as CANNON from "cannon-es";

function App() {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    // scene.add(directionalLight);
    // directionalLight.position.set(0,50,0);
    // directionalLight.castShadow = true;
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.shadowMap.enabled = true;

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
    directionalLight.castShadow = true;

    // const directional_Light = new THREE.DirectionalLight(0xffffff);
    // directional_Light.position.y = 0;
    // directional_Light.position.z = 1;
    // scene.add(directional_Light);

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

    const meshes = [];
    const bodies = [];

    window.addEventListener("click", (e) => {
      const sphereGeo = new THREE.SphereGeometry(0.125, 30, 30);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: Math.random() * 0xffffff,
        metalness: 0,
        roughness: 0,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphereMesh);
      sphereMesh.castShadow = true;
      // sphereMesh.position.copy(intersectionPoint);

      const spherePhysMat = new CANNON.Material();
      const sphereBody = new CANNON.Body({
        mass: 0.3,
        shape: new CANNON.Sphere(0.125),
        position: new CANNON.Vec3(
          intersectionPoint.x,
          intersectionPoint.y,
          intersectionPoint.z
        ),
        material: spherePhysMat,
      });
      world.addBody(sphereBody);

      const planeSphereContactMat = new CANNON.ContactMaterial(
        planePhysMat,
        spherePhysMat,
        { restitution: 0.3 }
      );

      world.addContactMaterial(planeSphereContactMat);

      meshes.push(sphereMesh);
      bodies.push(sphereBody);
    });

    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.81, 0) });
    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const planeMat = new THREE.MeshStandardMaterial({
      color: "#0000ffff",
      side: THREE.DoubleSide,
    });
    const planeMesh = new THREE.Mesh(planeGeo, planeMat);
    scene.add(planeMesh);
    planeMesh.receiveShadow = true;

    const planePhysMat = new CANNON.Material();

    const planeBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Box(new CANNON.Vec3(5, 5, 0.001)),
      material: planePhysMat,
    });

    planeBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(planeBody);

    //Load background texture
    // const loader = new THREE.TextureLoader();
    // loader.load(Toronto, function (texture) {
    //   scene.background = texture;
    // });

    // Add Orbit Controls to canvas (imported at top of doc)
    // const orbit = new OrbitControls(camera, renderer.domElement);
    // bodies.push(sphereBody);

    const timestep = 1 / 60;

    const animate = function () {
      world.step(timestep);

      planeMesh.position.copy(planeBody.position);
      planeMesh.quaternion.copy(planeBody.quaternion);

      for (let i = 0; i < meshes.length; i++) {
        meshes[i].position.copy(bodies[i].position);
        meshes[i].quaternion.copy(bodies[i].quaternion);
      }

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
