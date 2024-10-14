import React, { useState } from "react";
import shoeImage1 from "../images/image-product-1-thumbnail.jpg";
import trashcan from "../images/icon-delete.svg";

const Cart = ({ count, inCart, handleRemoveItems }) => {
  const [price, setPrice] = useState("125.00"); //Initialized to 125.00. Only one shoe displayed for project.
  const totalPrice = price * count;

  return (
    <div className="cart-container">
      <p className="cart-title">Cart</p>
      {count > 0 && inCart ? (
        <div className="items-in-cart-container">
          <div className="items-in-cart">
            <img
              className="cart-thumbnail"
              src={shoeImage1}
              alt="Thumbnail of shoe"
            />
            <div className="cart-info">
              <p className="shoe-name">Fall Limited Edition Sneakers</p>
              <div className="price-info">
                <p className="shoe-price">${price}</p>
                <p>x</p>
                <p className="amount-purchased">{count}</p>
                <p className="total-price">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <button onClick={handleRemoveItems} className="trashcan-btn">
              <img className="trashcan-img" src={trashcan} alt="trashcan" />
            </button>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
