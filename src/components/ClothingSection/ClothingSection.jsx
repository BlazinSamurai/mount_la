import "./ClothingSection.css";

import * as THREE from "three";

import React, { useRef, useState } from "react";
import {
  Center,
  ScrollControls,
  Scroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { Flex, Box } from "@react-three/flex";
import { Canvas, useFrame } from "@react-three/fiber";

import ClothingItem from "../ClothingItem/ClothingItem";

import blkTeeFrnt from "/Blk_Oversize_T_front.png";
import blkTeeBck from "/Blk_Oversize_T_back.png";
import whtTeeBck from "/Wht_Oversize_T_back.png";
import whtTeeFrnt from "/Wht_Oversize_T_front.png";

function ClothingSection() {
  // const teeBlk = useVideoTexture("/Tee_LosAngeles_blk.mkv");
  // const teeWht = useVideoTexture("/Tee_LosAngeles_wht.mkv");

  let i = 0;

  const products = [
    // {
    //   id: `tee${i++}`,
    //   style: "Oversize_LA_Topo_on_bck",
    //   color: ["White", "Black"],
    //   images: [whtTeeFrnt, whtTeeBck, blkTeeFrnt, blkTeeBck]
    // },
    { id: `tee${i++}`, front: blkTeeFrnt, back: blkTeeBck, alt: "Black Tee" },
    { id: `tee${i++}`, front: whtTeeFrnt, back: whtTeeBck, alt: "White Tee" },
    { id: `tee${i++}`, front: blkTeeFrnt, back: blkTeeBck, alt: "Black Tee" },
  ];

  return (
    <section className="clothing-section">
      <div className="clothing-section__items">
        {products.map((product) => (
          <ClothingItem
            key={product.id}
            frntImg={product.front}
            bckImg={product.back}
            altTxt={product.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default ClothingSection;
