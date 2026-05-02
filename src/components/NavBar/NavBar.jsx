import "./NavBar.css";

import logoImg from "../../images/logo.svg";
import cart from "../../images/shopping_cart.svg";
import searchIcon from "../../images/map_search.svg";

const NavBar = () => {
  return (
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
          className="navBar__searchBar-input"
          maxLength={15}
        />
      </search>
      <img src={cart} alt="Cart Icon" className="navBar__cart" />
    </header>
  );
};

export default NavBar;
