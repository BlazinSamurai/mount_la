import "./App.css";

import { useRef, useState } from "react";
import { Html, View, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingSection from "../ClothingSection/ClothingSection.jsx";
import Promo from "../Promo/Promo.jsx";
import TopoBackground from "../TopoBackground.jsx";

import logoImg from "../../images/logo.svg";
import headerLogo from "../../images/mt_los_angeles_logo.svg";

function App() {
  const container = useRef();
  const view1 = useRef();
  const view2 = useRef();

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
    <main style={{ width: "100vw", height: "100vh" }}>
      <div
        ref={view1}
        style={{ height: 1500, width: "100%", border: "3px solid black" }}
      />
      <div
        ref={view2}
        style={{
          height: 950,
          width: "100vw",
          border: "3px solid green",
        }}
      />

      <Canvas
        eventSource={document.getElementById("root")}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
        }}
      >
        <View track={view1}>
          <Promo />
        </View>

        <View track={view2}>
          <TopoBackground
            colorOne={colorOne}
            colorTwo={colorTwo}
            searchClicked={false}
          />
        </View>
      </Canvas>
    </main>
  );
}

export default App;
