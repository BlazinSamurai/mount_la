// import "./ClothingSection.css";

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

const ClothingSection = () => {
  const teeBlk = useVideoTexture("/Tee_LosAngeles_blk.mkv");
  const teeWht = useVideoTexture("/Tee_LosAngeles_wht.mkv");
  const whtTeeBck = useTexture("/Wht_Oversize_T_back.png");
  const whtTeeFrnt = useTexture("/Wht_Oversize_T_front.png");
  const blkTeeBck = useTexture("/Blk_Oversize_T_back.png");
  const blkTeeFrnt = useTexture("/Blk_Oversize_T_front.png");

  return (
    // https://github.com/pmndrs/react-three-flex/blob/master/README.md#sizing

    <ScrollControls pages={3} damping={0.1}>
      <Scroll>
        <Flex
          position={[-6, 2, 0]}
          flexDirection={"row"}
          flexWrap={"wrap"}
          size={[8, 0, 0]}
          // paddingRight={10}
          // margin={10}
          onReflow={({ height }) => console.log("Total height:", height)}
        >
          {/* <Box centerAnchor>
        <mesh>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial map={teeBlk} toneMapped={false} />
        </mesh>
      </Box> */}
          <Box centerAnchor>
            {/* Images: Front then Back */}
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={blkTeeFrnt}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={blkTeeBck}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          {/* White Style Tee Shirt Video */}
          {/* <Box centerAnchor>
        <mesh>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial map={teeWht} toneMapped={false} />
        </mesh>
      </Box> */}
          {/* Images: Front then Back */}
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={whtTeeFrnt}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={whtTeeBck}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          {/* <Box centerAnchor>
        <mesh>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial map={teeBlk} toneMapped={false} />
        </mesh>
      </Box> */}
          <Box centerAnchor>
            {/* Images: Front then Back */}
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={blkTeeFrnt}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={blkTeeBck}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          {/* White Style Tee Shirt Video */}
          {/* <Box centerAnchor>
        <mesh>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial map={teeWht} toneMapped={false} />
        </mesh>
      </Box> */}
          {/* Images: Front then Back */}
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={whtTeeFrnt}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
          <Box centerAnchor>
            <mesh>
              <planeGeometry args={[2, 3]} />
              <meshBasicMaterial
                map={whtTeeBck}
                toneMapped={false}
                transparent={true}
              />
            </mesh>
          </Box>
        </Flex>
      </Scroll>
    </ScrollControls>
  );
};

export default ClothingSection;
