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

  // 1. Create a "Master Timeline" that is PAUSED
  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true });

      if (!viewPosition) return;

      // STREET VIEW to FISH TANK
      timeline.current.to(camera.position, {
        x: 0,
        y: 4,
        z: 0,
        duration: 3,
      });
    },
    { camera, dependencies: [viewPosition] },
  );

  // 2. Use useFrame to sync the scroll progress to the timeline
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value =
        state.clock.getElapsedTime();
    }

    // scoll.offset is a value from 0 to 1
    // We tell the GSAP timeline to seek to that specific percentage
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration());
      camera.lookAt(0, camera.position.y, 0);
    }
  });

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
