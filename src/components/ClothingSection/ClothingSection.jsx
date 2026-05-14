import "./ClothingSection.css";

import * as THREE from "three";

import React, { useRef, useState } from "react";
import {
  Center,
  Html,
  ScrollControls,
  Scroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { Flex, Box } from "@react-three/flex";
import { Canvas, useFrame } from "@react-three/fiber";

import NavBar from "../NavBar/NavBar.jsx";
import ClothingItem from "../ClothingItem/ClothingItem";
import TopoBackground from "../TopoBackground.jsx";

import blkTeeFrnt from "/Blk_Oversize_T_front.png";
import blkTeeBck from "/Blk_Oversize_T_back.png";
import whtTeeBck from "/Wht_Oversize_T_back.png";
import whtTeeFrnt from "/Wht_Oversize_T_front.png";

function ClothingSection({ enableScroll, disableScroll }) {
  // const teeBlk = useVideoTexture("/Tee_LosAngeles_blk.mkv");
  // const teeWht = useVideoTexture("/Tee_LosAngeles_wht.mkv");

  const [colorOne, setColorOne] = useState("000000");
  const [colorTwo, setColorTwo] = useState("a0a2a5");

  let i = 0;

  const products = [
    {
      id: "Over_size_tee_shirt_" + i++,
      name: "LA Map Tee",
      price: "$19.95",
      alt: "Over Size Tee Shirt",
      styles: [
        {
          color: ["ffffff", "White"],
          images: [whtTeeFrnt, whtTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 0,
          XX_large: 15,
        },
        {
          color: ["000000", "Black"],
          images: [blkTeeFrnt, blkTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 20,
          XX_large: 0,
        },
      ],
    },
    {
      id: "Over_size_tee_shirt_7" + i++,
      name: "LA Map Tee",
      price: "$17.95",
      alt: "Over Size Tee Shirt",
      styles: [
        {
          color: ["ffffff", "White7"],
          images: [whtTeeFrnt, whtTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 0,
          XX_large: 15,
        },
        {
          color: ["000000", "Black7"],
          images: [blkTeeFrnt, blkTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 20,
          XX_large: 0,
        },
      ],
    },
    {
      id: "Over_size_tee_shirt_5" + i++,
      name: "LA Map Tee",
      price: "$15.95",
      alt: "Over Size Tee Shirt",
      styles: [
        {
          color: ["ffffff", "White5"],
          images: [whtTeeFrnt, whtTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 0,
          XX_large: 15,
        },
        {
          color: ["000000", "Black5"],
          images: [blkTeeFrnt, blkTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 20,
          XX_large: 0,
        },
      ],
    },
    {
      id: "Over_size_tee_shirt_3" + i++,
      name: "LA Map Tee",
      price: "$13.95",
      alt: "Over Size Tee Shirt",
      styles: [
        {
          color: ["ffffff", "White3"],
          images: [whtTeeFrnt, whtTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 0,
          XX_large: 15,
        },
        {
          color: ["000000", "Black3"],
          images: [blkTeeFrnt, blkTeeBck],
          small: 25,
          medium: 25,
          large: 40,
          X_large: 20,
          XX_large: 0,
        },
      ],
    },
  ];

  return (
    <>
      {/* <Html> */}
      <section className="clothing-section">
        {/* <NavBar /> */}
        <div className="clothing-section__items">
          {products.map((product) => (
            <ClothingItem
              key={product.id}
              product={product}
              enableScroll={enableScroll}
              disableScroll={disableScroll}
            />
          ))}
        </div>
      </section>
      {/* </Html> */}
      {/* <TopoBackground
        colorOne={colorOne}
        colorTwo={colorTwo}
        searchClicked={false}
      /> */}
    </>
  );
}

export default ClothingSection;
