import React from "react";
import { useState } from "react";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import image1thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4thumbnail from "../images/image-product-4-thumbnail.jpg";

const ShoeDisplay = () => {
  // const img1 = "../images/image-product-1.jpg";
  // const img2 = "../images/image-product-2.jpg";

  const img1 = image1;
  const img2 = image2;
  const img3 = image3;
  const img4 = image4;

  const [currentShoeImage, setCurrentShoeImage] = useState(image1);

  const handleOnClick = (e) => {
    setCurrentShoeImage(e.target.alt);
  };

  return (
    <div className="shoe-display-container">
      <img
        className="main-shoe"
        src={currentShoeImage}
        alt="Image of shoe product"
      />
      <div className="shoe-display-thumbnail">
        <img
          onClick={handleOnClick}
          className="thumbnail"
          src={image1thumbnail}
          alt={image1}
        ></img>
        <img
          onClick={handleOnClick}
          className="thumbnail"
          src={image2thumbnail}
          alt={image2}
        />
        <img
          onClick={handleOnClick}
          className="thumbnail"
          src={image3thumbnail}
          alt={image3}
        />
        <img
          onClick={handleOnClick}
          className="thumbnail"
          src={image4thumbnail}
          alt={image4}
        />
      </div>
    </div>
  );
};

export default ShoeDisplay;
