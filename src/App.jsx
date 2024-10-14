import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ShoeInfo from "./components/ShoeInfo";
import ShoeDisplay from "./components/ShoeDisplay";
import Modal from "./components/Modal";
import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";

const App = () => {
  const [count, setCount] = useState(0);
  const [inCart, setInCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const shoeArray = [image1, image2, image3, image4];

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="main-content">
      <Navbar
        count={count}
        setCount={setCount}
        inCart={inCart}
        setInCart={setInCart}
      />

      <div className="shoe-sections">
        <ShoeDisplay handleOpenModal={handleOpenModal} shoeArray={shoeArray} />
        <ShoeInfo count={count} setCount={setCount} setInCart={setInCart} />
      </div>

      {openModal && (
        <div className="overlay">
          <Modal handleOpenModal={handleOpenModal} shoeArray={shoeArray} />
        </div>
      )}
    </div>
  );
};

export default App;
