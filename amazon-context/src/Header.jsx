import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StoreMallDirectoryIcon
            className="header__logoImage"
            fontSize="large"
          />
          <h2 className="header__logoTitle">Amazon</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" fontSize="medium" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout " style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon className="itemBasket" fontSize="large" />
            <span className="nav__itemLineTwo nav__basketCount"></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
