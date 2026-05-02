import * as THREE from "three";

import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import topoVertexShader from "../../shaders/Topograph/vertex.glsl";
import topoFragmentShader from "../../shaders/Topograph/fragment.glsl";

const NavBar_TopoBckgnd = ({ colorOne, colorTwo, viewHeight }) => {
  const meshRef = useRef();
  // This hook gives us the responsive viewport size in Three.js units
  const { viewport } = useThree();

  const TopoShader = {
    vertexShader: topoVertexShader,
    fragmentShader: topoFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColorBase: { value: new THREE.Color(`#${colorOne}`) }, // Background color
      uColorLine: { value: new THREE.Color(`#${colorTwo}`) }, // Line color
    },
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewHeight]} />
      <shaderMaterial attach="material" {...TopoShader} />
    </mesh>
  );
};

export default NavBar_TopoBckgnd;
