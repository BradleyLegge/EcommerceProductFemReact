import React from "react";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import image1thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4thumbnail from "../images/image-product-4-thumbnail.jpg";

const ShoeDisplay = () => {
  return (
    <div className="shoe-display-container">
      <img className="main-shoe" src={image1} alt="Image of shoe product" />
      <div className="shoe-display-thumbnail">
        <img
          className="thumbnail"
          src={image1thumbnail}
          alt="Thumnail of shoe product"
        ></img>
        <img
          className="thumbnail"
          src={image2thumbnail}
          alt="Thumnail of shoe product"
        />
        <img
          className="thumbnail"
          src={image3thumbnail}
          alt="Thumnail of shoe product"
        />
        <img
          className="thumbnail"
          src={image4thumbnail}
          alt="Thumnail of shoe product"
        />
      </div>
    </div>
  );
};

export default ShoeDisplay;
