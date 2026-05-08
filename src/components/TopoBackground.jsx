import * as THREE from "three";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import topoVertexShader from "../shaders/Topograph/vertex.glsl";
import topoFragmentShader from "../shaders/Topograph/fragment.glsl";

const TopoBackground = ({
  colorOne,
  colorTwo,
  viewHeight,
  searchClicked,
  headerActive,
}) => {
  const meshRef = useRef();
  const timeline = useRef();

  // This hook gives us the responsive viewport size in Three.js units
  const { viewport } = useThree();
  const { camera } = useThree();

  const [isSearchClicked, setIsSearchClikced] = useRef(searchClicked);
  const [displayHeight, setDisplayHeight] = useState(viewport.height);
  const [viewPosition, setViewPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

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
      setViewPosition(0, 0, 0);
    } else if (headerActive) {
      setDisplayHeight(viewHeight);
      setViewPosition({ x: 0, y: 7, z: 0 });
    }
  }, [searchClicked]);

  return (
    <mesh
      ref={meshRef}
      name="TopoBackground"
      position={[viewPosition.x, viewPosition.y, viewPosition.z]}
    >
      <planeGeometry args={[viewport.width, displayHeight]} />
      <shaderMaterial attach="material" {...TopoShader} />
    </mesh>
  );
};

export default TopoBackground;
