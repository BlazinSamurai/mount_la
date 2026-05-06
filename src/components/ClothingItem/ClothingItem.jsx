import "./ClothingItem.css";

import React, { useState } from "react";

import ItemPreview from "../ItemPreview/ItemPreview";

function ClothingItem({ product }) {
  const [currentImg, setCurrentImg] = useState(product.styles[0].images[0]);
  const [backupImg, setBackupImg] = useState(product.styles[0].images[1]);
  const [currentColor, setCurrentColor] = useState(product.styles[0].color[0]);
  const [currentColorName, setCurrentColorName] = useState(
    product.styles[0].color[1],
  );
  const [openPreview, setOpenPreview] = useState(false);

  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  }

  function enableScroll() {
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  }

  function handleColorChng(productObj, itemColorHex) {
    if (itemColorHex !== currentColor) {
      setCurrentColor(itemColorHex);
      productObj.styles.map((obj) => {
        setCurrentColorName(obj.color[1]);
        if (obj.color[0] === itemColorHex) {
          setCurrentImg(obj.images[0]);
          setBackupImg(obj.images[1]);
        }
      });
    }
  }

  function handlePreviewOpen() {
    disableScroll();
    setOpenPreview(true);
  }

  function closePreview() {
    setOpenPreview(false);
    enableScroll();
  }

  return (
    <>
      <div className="clothing-section__item-container">
        <img
          src={currentImg}
          alt={product.alt}
          className="clothing-section__item-img"
        />
        <img
          src={backupImg}
          alt={product.alt}
          className="clothing-section__item-img bck-img"
          onClick={handlePreviewOpen}
        />
        <div className="clothing-section__colors-container">
          Colors:
          <div className="clothing-section__colors">
            {product.styles.map((item) => {
              return (
                <div
                  key={`Color: ${item.color[0]}`}
                  style={{ backgroundColor: `#${item.color[0]}` }}
                  className="clothing-section__color"
                  onClick={() => {
                    handleColorChng(product, item.color[0]);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ItemPreview
        handlePreview={closePreview}
        currentColorName={currentColorName}
        currentImg={backupImg}
        altTxt={product.alt}
        product={product}
        isOpen={openPreview}
      />
    </>
  );
}

export default ClothingItem;
