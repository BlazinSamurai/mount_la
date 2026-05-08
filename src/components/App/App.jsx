import "./App.css";

import { useRef, useState } from "react";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import Promo from "../Promo/Promo.jsx";
import TopoBackground from "../TopoBackground.jsx";

import logoImg from "../../images/logo.svg";
import headerLogo from "../../images/mt_los_angeles_logo.svg";

function App() {
  const container = useRef();

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
    <main className="app" ref={container}>
      {/* Fixed background, Global Canvas */}
      <div className="app__canvas-wrapper">
        <Canvas eventSource={container}>
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
        <header className="app__header">
          <div className="app__header-background">
            <img src={headerLogo} alt="Logo Img" className="app__header-logo" />
          </div>
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
