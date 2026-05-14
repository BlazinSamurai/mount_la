import "./Promo.css";

import { useRef } from "react";
import {
  View,
  PerspectiveCamera,
  Environment,
  Center,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { BakedTurqTee } from "../Baked_shirt_turquoise.jsx";

function Promo() {
  const meshRef = useRef();
  const viewRef = useRef();

  // useGSAP(() => {
  //   if (!meshRef.current) return;
  //   gsap.fromTo(
  //     meshRef.current.position,
  //     { y: -5, rotationY: 0 },
  //     {
  //       y: 0,
  //       rotationY: Math.PI * 2,
  //       scrollTrigger: {
  //         trigger: ".promo-trigger-zone",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true,
  //       },
  //     },
  //   );
  // }, []);

  useGSAP(() => {
    if (!meshRef.current) {
      return null;
    } else {
      gsap.fromTo(
        meshRef.current.position,
        { x: 0 },
        {
          x: -5,
          // rotation: 360,
          scrollTrigger: {
            start: 300,
            end: 500,
            scrub: true,
            // preventOverlaps: preventOverlaps,
            // fastScrollEnd: fastScrollEnd,
          },
        },
      );
    }
  }, []);

  // USE GSAP ScrollTrigger
  return (
    <group ref={meshRef}>
      <BakedTurqTee />
    </group>
  );
}

export default Promo;
