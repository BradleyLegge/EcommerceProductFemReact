import React from "react";
import minusSign from "../images/icon-minus.svg";
import plusSign from "../images/icon-plus.svg";
import shoppingCart from "../images/icon-cart.svg";

const ShoeInfo = ({ count, setCount, setInCart }) => {
  const handleSubmit = () => {
    if (count > 0) {
      setInCart(true);
    }
  };

  const handleAddItem = () => {
    setCount(() => count + 1);
  };

  const handleSubItem = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };

  return (
    <div className="shoe-info-container">
      <p className="title">sneaker company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="shoe-detail">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-details">
        <h2 className="new-price">$125.00</h2>
        <p className="new-percentage">50%</p>
      </div>
      <p className="reg-price">$250.00</p>
      <div className="add-shoe-container">
        <div className="plus-minus-shoe-amount">
          <button onClick={handleSubItem} className="minus-btn">
            <img src={minusSign} alt="Minus sign" />
          </button>
          <p className="shoe-amount">{count}</p>
          <button onClick={handleAddItem} className="plus-btn">
            <img src={plusSign} alt="Plus sign" />
          </button>
        </div>
        <button onClick={handleSubmit} className="add-to-cart-btn">
          <img src={shoppingCart} alt="Image of shopping cart" />
          <p className="add-to-cart">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ShoeInfo;
