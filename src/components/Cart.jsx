import React from "react";
import shoeImage1 from "../images/image-product-1-thumbnail.jpg";
import trashcan from "../images/icon-delete.svg";

const Cart = () => {
  return (
    <div className="cart-container">
      <p className="cart-title">Cart</p>
      {/* <p className="empty-cart">Your cart is empty.</p> */}
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
              <p className="shoe-price">$125.00</p>
              <p>x</p>
              <p className="amount-purchased">3</p>
              <p className="total-price">$375.00</p>
            </div>
          </div>
          <button className="trashcan-btn">
            <img className="trashcan-img" src={trashcan} alt="trashcan" />
          </button>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
