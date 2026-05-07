import "./ShoppingCart.css";

import { useEffect, useState } from "react";

import closeIcon from "../../images/close.svg";

function ShoppingCart({ item, itemColor, itemImg, isOpen, handleCartClose }) {
  return (
    <div className="shoppingCart">
      <button className="shoppingCart__close-btn">
        <img
          src={closeIcon}
          className="shoppingCart__close-img"
          alt="Close Icon"
          onClick={handleCartClose}
        />
      </button>
      <h5 className="shoppingCart__info-title">Your Cart:</h5>
      <div className="shoppingCart__info">
        <span className="shoppingCart__info-dividor"></span>
      </div>
      <button className="shoppingCart__info-checkout-btn">Checkout</button>
    </div>
  );
}

export default ShoppingCart;
