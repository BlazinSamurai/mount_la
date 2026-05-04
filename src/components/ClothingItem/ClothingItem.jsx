import "./ClothingItem.css";

import React, { useState } from "react";

import ItemPreview from "../ItemPreview/ItemPreview";

function ClothingItem({ key, frntImg, bckImg, altTxt, handleItemClick }) {
  const [currentImg, setCurrentImg] = useState(frntImg);
  const [openPreview, setOpenPreview] = useState(false);

  function closePreview() {
    setOpenPreview(false);
  }

  return (
    <>
      <div
        className="clothing-section__item-container"
        onClick={() => {
          setOpenPreview(true);
        }}
      >
        <img
          src={frntImg}
          alt={altTxt}
          className="clothing-section__item-img"
        />
        <img
          src={bckImg}
          alt={altTxt}
          className="clothing-section__item-img bck-img"
        />
      </div>
      {openPreview ? (
        <ItemPreview
          handlePreview={closePreview}
          frntImg={frntImg}
          bckImg={bckImg}
          altTxt={altTxt}
        />
      ) : null}
    </>
  );
}

export default ClothingItem;
