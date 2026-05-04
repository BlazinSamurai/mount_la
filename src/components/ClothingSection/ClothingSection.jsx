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

import blkTeeFrnt from "/Blk_Oversize_T_front.png";
import blkTeeBck from "/Blk_Oversize_T_back.png";
import whtTeeBck from "/Wht_Oversize_T_back.png";
import whtTeeFrnt from "/Wht_Oversize_T_front.png";

function ClothingSection() {
  // const teeBlk = useVideoTexture("/Tee_LosAngeles_blk.mkv");
  // const teeWht = useVideoTexture("/Tee_LosAngeles_wht.mkv");

  return (
    <div className="clothing-section">
      <div className="clothing-section__items">
        <img
          src={blkTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={blkTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeBck}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
        <img
          src={whtTeeFrnt}
          alt="Basic Black Tee Shirt"
          className="clothing-section__item"
        />
      </div>
    </div>
  );
}

export default ClothingSection;
