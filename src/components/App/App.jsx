import "./App.css";

import * as THREE from "three";
import React, { useState } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
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
          {/* pages={3} defines the scroll height (3 * 100vh) */}
          {/* <ScrollControls pages={3} damping={0.1}> */}
          {/* <Scroll>
              <Flex
                onReflow={({ height }) => console.log("Total height:", height)}
              >
                <ClothingSection />
              </Flex>
            </Scroll> */}
          <ClothingSection />
          <TopoBackground
            colorOne={colorOne}
            colorTwo={colorTwo}
            searchClicked={false}
          />
          {/* </ScrollControls> */}
        </Canvas>
      </div>
      <NavBar openSearchModal={openSearchModal} />
    </main>
  );
}

export default App;
