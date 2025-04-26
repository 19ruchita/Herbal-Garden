/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Sidebar from './components/Sidebar';

const VirtualGarden = () => {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);  // Sky blue background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // Ground plane with green color for grass
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0x3a9d23 });  // Green color
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Generate random positions for plants
    const generateRandomPosition = () => {
      const x = (Math.random() - 0.5) * 90;  // -45 to 45
      const z = (Math.random() - 0.5) * 90;  // -45 to 45
      return { x, z };
    };

    // Load and add 3D models
    const loader = new GLTFLoader();

    // Function to create and add 3D models
    const createModel = (modelPath, position) => {
      loader.load(modelPath, (gltf) => {
        const model = gltf.scene;
        
        // Adjust position to place on the ground
        model.position.set(position.x, 0, position.z);
        
        // Scale the model (adjust as needed)
        const scale = 0.5; // Adjust this value to make models larger or smaller
        model.scale.set(scale, scale, scale);
        
        // Rotate the model if needed (adjust as needed)
        model.rotation.y = Math.random() * Math.PI * 2; // Random rotation

        scene.add(model);
        
        console.log(`Model loaded: ${modelPath}`);
        console.log(`Model position: x=${position.x}, z=${position.z}`);
      }, 
      (xhr) => {
        console.log(`${modelPath}: ${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error(`Error loading model ${modelPath}:`, error);
      });
    };

    // Example paths to your 3D models - adjust these paths as needed
    const modelPaths = [
      '/Aloe_Vera_Plant_0905074412.glb',
      '/Holy_Basil_Plant_0905080318.glb',
      '/Potted_Sapling_0905075235.glb'
    ];

    // Place some 3D models
    modelPaths.forEach((path) => {
      createModel(path, generateRandomPosition());
    });

    // Camera and controls setup
    camera.position.set(0, 2, 10); // Move camera back and up slightly
    controlsRef.current = new PointerLockControls(camera, renderer.domElement);
    scene.add(controlsRef.current.getObject());

    // Movement setup
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;

    const onKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;
      }
    };

    const onKeyUp = (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    const onEscape = () => {
      if (controlsRef.current.isLocked) {
        controlsRef.current.unlock();
        setIsLocked(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('click', () => {
      controlsRef.current.lock();
      setIsLocked(true);
    });
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        onEscape();
      }
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current.isLocked) {
        const delta = 0.1;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        controlsRef.current.moveRight(-velocity.x * delta);
        controlsRef.current.moveForward(-velocity.z * delta);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('click', () => {
        controlsRef.current.lock();
        setIsLocked(true);
      });
      document.removeEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
          onEscape();
        }
      });
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
      <Sidebar onEscape={() => controlsRef.current?.unlock()} />
    </div>
  );
};

export default VirtualGarden;