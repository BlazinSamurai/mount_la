import "./App.css";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TopoShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorBase: { value: new THREE.Color("#0a0a0a") }, // Background color
    uColorLine: { value: new THREE.Color("#334155") }, // Line color
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorBase;
    uniform vec3 uColorLine;
    varying vec2 vUv;

    float random (vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise (vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    void main() {
      // Scale and animate the noise
      vec2 st = vUv * 3.0; 
      float n = noise(st + uTime * 0.03);
      
      // Extract isolines
      float lines = fract(n * 12.0); // Increase multiplier for more lines
      float pattern = smoothstep(0.0, 0.04, lines) - smoothstep(0.04, 0.08, lines);
      
      vec3 finalColor = mix(uColorBase, uColorLine, pattern);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

const TopoBackground = () => {
  const meshRef = useRef();

  // Update uTime uniform every frame for subtle animation
  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value =
      state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial attach="material" args={[TopoShader]} />
    </mesh>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <TopoBackground />
        </Canvas>
      </div>
    </>
  );
}

export default App;
