import "./Promo.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { BakedTurqTee } from "../Baked_shirt_turquoise.jsx";

function Promo() {
  const meshRef = useRef();

  useGSAP(() => {
    if (!meshRef.current) {
      return null;
    } else {
      gsap.fromTo(
        meshRef.current.position,
        { x: 0 },
        {
          x: -5,
          scrollTrigger: {
            start: 300,
            end: 500,
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <group ref={meshRef}>
      <BakedTurqTee />
    </group>
  );
}

export default Promo;
