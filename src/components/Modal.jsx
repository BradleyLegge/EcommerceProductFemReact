import React from "react";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Modal = ({ handleOpenModal, shoeArray }) => {
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
    <div className="modal-container">
      <button onClick={handleOpenModal} className="modal-close-btn">
        <FaTimes className="modal-close-icon" />
      </button>
      <button onClick={handlePrevImage} className="modal-prev-btn">
        <FaChevronLeft class="modal-prev-icon" />
      </button>
      <img
        className="modal-main-shoe"
        src={shoeArray[modalCurrentIndex]}
        alt="Image of shoe product"
      />
      <button onClick={handleNextImage} className="modal-next-btn">
        <FaChevronRight className="modal-next-icon" />
      </button>
      <div className="modal-shoe-display-thumbnail">
        {shoeArray.map((_, index) => {
          return (
            <img
              key={index}
              className="modal-thumbnail"
              src={shoeArray[index]}
              alt="Thumbnail images"
              onClick={() => setModalCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
