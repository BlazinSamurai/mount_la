import "./App.css";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import TopoBackground from "./TopoBackground.jsx";

function App() {
  return (
    <>
      <div className="topoBckgnd">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <TopoBackground />
        </Canvas>
      </div>
    </>
  );
}

export default App;
