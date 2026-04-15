import * as THREE from "three";

import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import topoVertexShader from "../shaders/Topograph/vertex.glsl";
import topoFragmentShader from "../shaders/Topograph/fragment.glsl";

const TopoShader = {
  vertexShader: topoVertexShader,
  fragmentShader: topoFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uColorBase: { value: new THREE.Color("#000000") }, // Background color
    uColorLine: { value: new THREE.Color("#a0a2a5") }, // Line color
  },
};

const TopoBackground = () => {
  const meshRef = useRef();
  // This hook gives us the responsive viewport size in Three.js units
  const { viewport } = useThree();

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial attach="material" {...TopoShader} />
    </mesh>
  );
};

export default TopoBackground;
