import "./ItemPreview.css";

import React, { useEffect, useRef, useState } from "react";
import { Scroll } from "@react-three/drei";

import closeIcon from "../../images/close.svg";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

function ItemPreview({
  handlePreview,
  currentColorName,
  currentImg,
  altTxt,
  product,
  isOpen,
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

  function addItem(color, itemImg) {
    <ShoppingCart item={product} itemColor={color} itemImg={itemImg} />;
  }

  useEffect(() => {
    setCurrentPreviewImg(currentImg);
    setCurrentPreviewColorName(currentColorName);
  }, [currentImg]);

  return (
    <>
      {isOpen && (
        <div className="itemPreview">
          <div className="itemPreview__container">
            <img
              src={closeIcon}
              alt="Close Preview Button"
              className="itemPreview__close"
              onClick={handlePreview}
            />
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
                          onClick={() => {
                            setCurrentPreviewImg(item.images[0]);
                          }}
                        />
                        <img
                          src={item.images[1]}
                          alt={altTxt}
                          className="itemPreview__side-img"
                          onClick={() => {
                            setCurrentPreviewImg(item.images[1]);
                          }}
                        />
                      </React.Fragment>
                    );
                  }
                  return null;
                  // NEED TO UPDATE: need a better way to iterate through
                  //                image array.
                })}
              </div>
            </div>
            <div className="itemPreview__info">
              <div className="itemPreview__info-title">{product.name}</div>
              <div className="itemPreview__info-txt">{product.price}</div>
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
                          handlePreviewChng(
                            item.color[1],
                            item.color[0],
                            product,
                          );
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <span className="itemPreview__info-dividor"></span>
              <div className="itemPreview__info-txt">Sizes:</div>
              <ul className="itemPreview__info-sizes">
                <li
                  className="itemPreview__size"
                  onClick={addItem(currentPreviewColorName, currentPreviewImg)}
                >
                  S
                </li>
                <li className="itemPreview__size">M</li>
                <li className="itemPreview__size">L</li>
                <li className="itemPreview__size">XL</li>
                <li className="itemPreview__size">2X</li>
              </ul>
              <span className="itemPreview__info-dividor"></span>
              <button className="itemPreview__info-add-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemPreview;
