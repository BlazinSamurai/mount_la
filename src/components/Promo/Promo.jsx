import "./Promo.css";

import { useRef } from "react";
import {
  View,
  PerspectiveCamera,
  Environment,
  Center,
} from "@react-three/drei";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { BakedTurqTee } from "../Baked_shirt_turquoise.jsx";

function Promo() {
  const meshRef = useRef();
  const viewRef = useRef();

  // Animate the Turquoise Tee based on scrolling the .promo-trigger-zone
  useGSAP(() => {
    if (!meshRef.current) return;
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

// function Promo() {
//   const meshRef = useRef();
//   const viewRef = useRef();

//   useGSAP(
//     () => {
//       if (!meshRef.current) return;

//       // GSAP now animates the 3D model as usual
//       gsap.to(meshRef.current.rotation, {
//         y: Math.PI * 2,
//         scrollTrigger: {
//           trigger: ".app__promo",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     },
//     { dependencies: [], scope: meshRef },
//   ); // Added scope for better ref tracking

//   // USE GSAP ScrollTrigger
//   return (
//     /* The View component 'snaps' the 3D scene to this div's position/size */
//     <View className="promo-3d-container">
//       <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//       <Environment preset="city" />
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

//       <Center>
//         <group ref={meshRef}>
//           <BakedTurqTee />
//         </group>
//       </Center>
//     </View>
//   );
// }

export default Promo;
