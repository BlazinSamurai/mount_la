import "./NavBar.css";

import { useState } from "react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import logoImg from "../../images/logo.svg";
import cart from "../../images/shopping_cart.svg";
import searchIcon from "../../images/map_search.svg";
import closeIcon from "../../images/close.svg";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import TopoBackground from "../TopoBackground";

function NavBar({ enableScroll, disableScroll }) {
  const [inputClicked, setInputClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  function handleInputClicked() {
    disableScroll();
    setInputClicked(true);
  }

  function handleSearchClose() {
    setInputClicked(false);
    enableScroll();
  }

  function handleCartClicked() {
    disableScroll();
    setCartClicked(true);
  }

  function handleCartClose() {
    setCartClicked(false);
    enableScroll();
  }

  return (
    <>
      {inputClicked ? null : (
        // <header className="navBar__change">
        //   <section className="navBar__change-content">
        //     <img src={logoImg} alt="Logo Image" className="navBar__logo" />
        //     <search className="navBar__searchBar">
        //       <img
        //         src={searchIcon}
        //         alt="Search Icon"
        //         className="navBar__searchBar-icon"
        //       />
        //       <input
        //         type="search"
        //         name="searchBar"
        //         placeholder="Search"
        //         className={`navBar__searchBar-input`}
        //         maxLength={15}
        //       />
        //     </search>
        //     <button className="navBar__close-btn" onClick={handleSearchClose}>
        //       <img
        //         src={closeIcon}
        //         alt="Close Icon"
        //         className="navBar__close-img"
        //       />
        //     </button>
        //   </section>
        //   <Canvas camera={{ position: [0, 0, 5] }}>
        //     <TopoBackground
        //       colorOne={"dedada"}
        //       colorTwo={"ffffff"}
        //       viewHeight={25}
        //       searchClicked={true}
        //     />
        //   </Canvas>
        // </header>
        <header className="navBar">
          <img src={logoImg} alt="Logo Image" className="navBar__logo" />
          <search className="navBar__searchBar">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="navBar__searchBar-icon"
            />
            <input
              type="search"
              name="searchBar"
              placeholder="Search"
              className={`navBar__searchBar-input`}
              maxLength={15}
              onClick={handleInputClicked}
            />
          </search>
          <img
            src={cart}
            alt="Cart Icon"
            className="navBar__cart"
            onClick={handleCartClicked}
          />
        </header>
      )}
      {cartClicked ? (
        <ShoppingCart isOpen={cartClicked} handleCartClose={handleCartClose} />
      ) : null}
    </>
  );
}

export default NavBar;
