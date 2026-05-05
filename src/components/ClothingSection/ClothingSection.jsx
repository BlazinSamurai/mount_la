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
    {
      id: `Over_size_tee_shirt_` + i++,
      alt: "Over Size Tee Shirt",
      styles: [
        {
          color: ["ffffff", "White"],
          images: [whtTeeFrnt, whtTeeBck],
        },
        {
          color: ["000000", "Black"],
          images: [blkTeeFrnt, blkTeeBck],
        },
      ],
    },
  ];

  return (
    <section className="clothing-section">
      <div className="clothing-section__items">
        {products.map((product) => (
          <ClothingItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ClothingSection;
