import "./Promo.css";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { BakedTurqTee } from "../Baked_shirt_turquoise.jsx";

function Promo() {
  const meshRef = useRef();

  // Animate the Turquoise Tee based on scrolling the .promo-trigger-zone
  useGSAP(() => {
    gsap.fromTo(
      meshRef.current.position,
      { y: -5, rotationY: 0 },
      {
        y: 0,
        rotationY: Math.PI * 2,
        scrollTrigger: {
          trigger: ".promo-trigger-zone",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      },
    );
  }, []);

  // USE GSAP ScrollTrigger
  return (
    <group ref={meshRef}>
      <BakedTurqTee />
    </group>
  );
}

export default Promo;
