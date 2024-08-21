import React from "react";
import logo from "../images/logo.svg";
import shoppingCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side-navbar">
        <a href="#">
          <img className="img-logo" src={logo} alt="Logo image" />
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="cart-avatar-container">
        <img
          className="shopping-cart"
          src={shoppingCart}
          alt="Image of a shopping cart"
        />
        <img className="avatar-image" src={avatar} alt="Avatar image" />
      </div>
    </div>
  );
};

export default Navbar;
