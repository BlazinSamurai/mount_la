import * as THREE from "three";

import { useRef } from "react";

import topoVertexShader from "../shaders/Topograph/vertex.glsl";
import topoFragmentShader from "../shaders/Topograph/fragment.glsl";

const TopoShader = {
  vertexShader: topoVertexShader,
  fragmentShader: topoFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorBase: { value: new THREE.Color("#000000") }, // Background color
    uColorLine: { value: new THREE.Color("#a0a2a5") }, // Line color
  },
};

const TopoBackground = () => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 2]} />
      <shaderMaterial attach="material" args={[TopoShader]} />
    </mesh>
  );
};

export default TopoBackground;
