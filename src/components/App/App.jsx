import "./App.css";

import * as THREE from "three";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import TopoBackground from "../TopoBackground.jsx";

function App() {
  const [colorOne, setColorOne] = useState("000000");
  const [colorTwo, setColorTwo] = useState("a0a2a5");

  function openSearchModal() {
    console.log("Search Bar Clicked.");
    setColorOne("a0a2a5");
    setColorTwo("000000");
  }

  return (
    <main className="app">
      <div className="app__canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <TopoBackground
            colorOne={colorOne}
            colorTwo={colorTwo}
            searchClicked={false}
          />
          <ClothingSection />
        </Canvas>
      </div>
      <NavBar openSearchModal={openSearchModal} />
    </main>
  );
}

export default App;
