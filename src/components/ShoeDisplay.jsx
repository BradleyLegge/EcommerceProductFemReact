import React from "react";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ShoeDisplay = ({ handleOpenModal, shoeArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setModalCurrentIndex((index) => {
      if (index === shoeArray.length - 1) return 0;
      return index + 1;
    });
  };

  const handlePrevImage = () => {
    setModalCurrentIndex((index) => {
      if (index === 0) return shoeArray.length - 1;
      return index - 1;
    });
  };

  return (
    <>
      <div className="mobile-shoe-display">
        <div className="mobile-container">
          <button onClick={handlePrevImage} className="mobile-prev-btn">
            <FaChevronLeft className="mobile-prev-icon" />
          </button>
          <img
            className="mobile-main-shoe"
            src={shoeArray[modalCurrentIndex]}
            alt="Image of shoe product"
          />
          <button onClick={handleNextImage} className="mobile-next-btn">
            <FaChevronRight className="mobile-next-icon" />
          </button>
        </div>
      </div>

      <div className="shoe-display-container">
        <img
          onClick={handleOpenModal}
          className="main-shoe"
          src={shoeArray[currentIndex]}
          alt="Image of shoe product"
        />
        <div className="shoe-display-thumbnail">
          {shoeArray.map((_, index) => {
            return (
              <img
                key={index}
                className="thumbnail"
                src={shoeArray[index]}
                alt="Thumbnail image"
                onClick={() => setCurrentIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShoeDisplay;
