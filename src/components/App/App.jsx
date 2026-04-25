import "./App.css";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import TopoBackground from "../TopoBackground.jsx";

function App() {
  return (
    <main className="app">
      <div className="app__canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <TopoBackground />
          <ClothingSection />
        </Canvas>
      </div>
      <NavBar />
    </main>
  );
}

export default App;
