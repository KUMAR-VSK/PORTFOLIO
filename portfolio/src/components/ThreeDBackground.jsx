import { useRef, useEffect } from 'react';
import { useVisuals } from '../contexts/VisualsContext'
import * as THREE from 'three';

const ThreeDBackground = () => {
  const { visualsEnabled } = useVisuals()
  if (!visualsEnabled) return null
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const shapes = [];
    const shapeCount = 15;
    
    for (let i = 0; i < shapeCount; i++) {
      const shape = new THREE.Mesh(geometry.clone(), material.clone());
      
      // Position shapes randomly in a sphere
      const radius = 3 + Math.random() * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * 2 * Math.PI;
      
      shape.position.x = radius * Math.sin(theta) * Math.cos(phi);
      shape.position.y = radius * Math.sin(theta) * Math.sin(phi);
      shape.position.z = radius * Math.cos(theta);
      
      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      // Random scale
      const scale = 0.5 + Math.random() * 1.5;
      shape.scale.set(scale, scale, scale);
      
      scene.add(shape);
      shapes.push({
        mesh: shape,
        speed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update shapes
      shapes.forEach(shapeObj => {
        const { mesh, speed, rotationSpeed } = shapeObj;
        
        mesh.position.x += speed.x;
        mesh.position.y += speed.y;
        mesh.position.z += speed.z;
        
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
        
        // Bounce back when reaching boundaries
        const boundary = 5;
        if (Math.abs(mesh.position.x) > boundary) speed.x *= -1;
        if (Math.abs(mesh.position.y) > boundary) speed.y *= -1;
        if (Math.abs(mesh.position.z) > boundary) speed.z *= -1;
      });
      
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
      // Dispose geometries and materials to prevent memory leaks
      shapes.forEach(shapeObj => {
        shapeObj.mesh.geometry.dispose();
        shapeObj.mesh.material.dispose();
      });
      scene.clear();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />;
};

export default ThreeDBackground;
