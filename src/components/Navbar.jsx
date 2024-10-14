import React from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import shoppingCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = ({ count, setCount, inCart, setInCart }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleRemoveItems = () => {
    setInCart(false);
    setCount(0);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="left-side-navbar">
        <button onClick={handleBurgerMenu} className="burger-open-btn">
          <FaBars className="mobile-open-icon" size="18px" />
        </button>
        <a href="#">
          <img className="img-logo" src={logo} alt="Logo image" />
        </a>
        {isOpen ? (
          <ul className="navbar-links-mobile">
            <button onClick={handleBurgerMenu} className="burger-close-btn">
              <FaTimes className="mobile-close-icon" />
            </button>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Menu</a>
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
        ) : (
          ""
        )}
        <ul className="navbar-links">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Menu</a>
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
        <button onClick={handleClick} className="shopping-cart-btn">
          <img
            className="shopping-cart"
            src={shoppingCart}
            alt="Image of a shopping cart"
          />
          {count > 0 ? <p className="cart-count">{count}</p> : ""}
        </button>
        <img className="avatar-image" src={avatar} alt="Avatar image" />
      </div>
      {isActive && (
        <Cart
          count={count}
          inCart={inCart}
          handleRemoveItems={handleRemoveItems}
        />
      )}
    </div>
  );
};

export default Navbar;
