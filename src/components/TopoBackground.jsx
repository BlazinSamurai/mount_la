import * as THREE from "three";

import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import topoVertexShader from "../shaders/Topograph/vertex.glsl";
import topoFragmentShader from "../shaders/Topograph/fragment.glsl";

const TopoBackground = ({ colorOne, colorTwo, viewHeight, searchClicked }) => {
  const meshRef = useRef();
  // This hook gives us the responsive viewport size in Three.js units
  const { viewport } = useThree();
  const [isSearchClicked, setIsSearchClikced] = useRef(searchClicked);
  const [displayHeight, setDisplayHeight] = useState(viewport.height);

  const TopoShader = {
    vertexShader: topoVertexShader,
    fragmentShader: topoFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColorBase: { value: new THREE.Color(`#${colorOne}`) }, // Background color
      uColorLine: { value: new THREE.Color(`#${colorTwo}`) }, // Line color
    },
  };

  useEffect(() => {
    if (searchClicked) {
      setDisplayHeight(viewHeight);
    }
  }, [searchClicked]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, displayHeight]} />
      <shaderMaterial attach="material" {...TopoShader} />
    </mesh>
  );
};

export default TopoBackground;
