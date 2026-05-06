import "./ShoppingCart.css";

import { useEffect, useState } from "react";

import closeIcon from "../../images/close.svg";

function ShoppingCart({ item, itemColor, itemImg, isOpen, handleCartClose }) {
  return (
    // <div className={`shoppingCart ${isOpen && "shoppingCart__opened"}`}>
    <div className={`shoppingCart`}>
      <button>
        <img src={closeIcon} alt="Close Icon" onClick={handleCartClose} />
      </button>
      <h5>Your Cart:</h5>
    </div>
  );
}

export default ShoppingCart;
