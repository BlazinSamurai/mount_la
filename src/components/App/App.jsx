import "./App.css";

import * as THREE from "three";
import React, { useState, Suspense } from "react";
import { Environment, Html, ScrollControls, Scroll } from "@react-three/drei";
import { Flex } from "@react-three/flex";
import { Canvas, useFrame } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import Promo from "../Promo/Promo.jsx";
import TopoBackground from "../TopoBackground.jsx";

import logoImg from "../../images/logo.svg";

function App() {
  const [colorOne, setColorOne] = useState("000000");
  const [colorTwo, setColorTwo] = useState("a0a2a5");

  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  }

  function enableScroll() {
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  }

  return (
    <main className="app">
      {/* The 3D Layer (Fixed background) */}
      <div className="app__canvas-wrapper">
        <Canvas>
          <TopoBackground
            colorOne={colorOne}
            colorTwo={colorTwo}
            searchClicked={false}
          />
          {/* 3D models */}
          <Promo />
        </Canvas>
      </div>

      {/* The DOM Layer (Normal scrolling) */}
      <div className="app__dom-wrapper">
        {/* Page Header (Logo) triggers the 3D animation */}
        <header>
          <img
            src={logoImg}
            alt="Header Logo of Page"
            className="app__logo-header"
          />
        </header>

        {/* Empty spacer for the "Promo Section" to give room for the 3D tee animations */}
        <section className="promo-trigger-zone" style={{ height: "100vh" }} />

        <NavBar />
        <ClothingSection />
      </div>
    </main>
  );
}

export default App;
