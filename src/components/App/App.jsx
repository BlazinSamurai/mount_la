import "./App.css";

import * as THREE from "three";
import React, { useState } from "react";
import { Html, ScrollControls, Scroll } from "@react-three/drei";
import { Flex } from "@react-three/flex";
import { Canvas, useFrame } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import TopoBackground from "../TopoBackground.jsx";

function App() {
  const [colorOne, setColorOne] = useState("000000");
  const [colorTwo, setColorTwo] = useState("a0a2a5");

  function openSearchModal() {
    setColorOne("a0a2a5");
    setColorTwo("000000");
  }

  return (
    <main className="app">
      <div className="app__canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ScrollControls>
            <Html fullscreen>
              <NavBar openSearchModal={openSearchModal} />
              <ClothingSection />
            </Html>
            <TopoBackground
              colorOne={colorOne}
              colorTwo={colorTwo}
              searchClicked={false}
            />
          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
}

export default App;
