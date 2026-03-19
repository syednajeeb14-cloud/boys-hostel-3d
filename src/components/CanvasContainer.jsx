import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import FloatingShapes from './FloatingShapes';

const CanvasContainer = () => {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ffe66d" />
        <Environment preset="city" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
