import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Torus } from '@react-three/drei';

const FloatingShapes = () => {
  const groupRef = useRef();
  const { size } = useThree();
  const isMobile = size.width < 768;

  useFrame(() => {
    if (groupRef.current) {
      const scrollY = window.scrollY;
      groupRef.current.rotation.y = scrollY * 0.002;
      groupRef.current.rotation.x = scrollY * 0.001;
      // Slight vertical parallax effect based on scroll
      groupRef.current.position.y = Math.sin(scrollY * 0.005) * 1.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Primary Red/Pink Shape */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Icosahedron args={[1.2, 0]} position={isMobile ? [0, 2.5, 0] : [3.5, 1, -2]}>
          <MeshDistortMaterial
            color="#ff6b6b"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distort={0.4}
            speed={2}
          />
        </Icosahedron>
      </Float>
      
      {/* Secondary Teal/Mint Shape */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[0.9, 0.4, 16, 32]} position={isMobile ? [-1, -3, 0] : [-4, -1, 1]}>
          <meshPhysicalMaterial
            color="#4ecdc4"
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            transmission={0.5}
            thickness={1}
          />
        </Torus>
      </Float>

      {/* Accent Yellow Shape */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={isMobile ? [1, -5, -2] : [0, 3.5, -5]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#ffe66d"
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </Float>

      {/* Small floating particles */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.5} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10 - 2]}>
            <octahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#ff6b6b" : "#4ecdc4"} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingShapes;
