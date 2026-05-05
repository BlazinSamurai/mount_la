import "./ItemPreview.css";

import React, { useState } from "react";

import closeIcon from "../../images/close.svg";

function ItemPreview({
  handlePreview,
  currentColorName,
  currentImg,
  otherImg,
  altTxt,
  product,
  //   handleColorChng,
}) {
  const [currentPreviewImg, setCurrentPreviewImg] = useState(currentImg);
  const [currentPreviewColorName, setCurrentPreviewColorName] =
    useState(currentColorName);

  function handlePreviewChng(colorClickedName, colorClickedHex, productObj) {
    if (currentPreviewColorName !== colorClickedName) {
      setCurrentPreviewColorName(colorClickedName);
      productObj.styles.map((obj) => {
        if (obj.color[0] === colorClickedHex) {
          setCurrentPreviewImg(obj.images[1]);
        }
      });
    }
  }
  return (
    <div className="itemPreview">
      <img
        src={closeIcon}
        alt="Close Preview Button"
        className="itemPreview__close"
        onClick={handlePreview}
      />
      <div className="itemPreview__container">
        <div className="itemPreview__img-container">
          <img
            src={currentPreviewImg}
            alt={altTxt}
            className="itemPreview__img"
          />
          <div className="itemPreview__side-imgs">
            {product.styles.map((item) => {
              if (currentPreviewColorName === item.color[1]) {
                return (
                  <React.Fragment key={item.id || item.color}>
                    <img
                      src={item.images[0]}
                      alt={altTxt}
                      className="itemPreview__side-img"
                    />
                    <img
                      src={item.images[1]}
                      alt={altTxt}
                      className="itemPreview__side-img"
                    />
                  </React.Fragment>
                );
              }
              return null;
              // NEED TO UPDATE: i++;, need a better way to iterate through
              //                image array.
            })}
          </div>
        </div>
        <div className="itemPreview__info">
          <div className="itemPreview__info-title">Basic Tee Shirt</div>
          <div className="itemPreview__info-txt">$19.99</div>
          <span className="itemPreview__info-dividor"></span>
          <div className="itemPreview__info-txt">
            Color: {currentPreviewColorName}
            <div className="itemPreview__info-colors">
              {product.styles.map((item) => {
                return (
                  <div
                    key={`Color: ${item.color}`}
                    style={{ backgroundColor: `#${item.color[0]}` }}
                    className="itemPreview__color"
                    onClick={() => {
                      handlePreviewChng(item.color[1], item.color[0], product);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPreview;
