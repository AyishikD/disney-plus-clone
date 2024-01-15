import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/images/slider-badging.jpg";
import Slide2 from "../assets/images/slider-scale.jpg";
import Slide3 from "../assets/images/slider-badag.jpg";
import Slide4 from "../assets/images/slider-scales.jpg";
import { motion } from "framer-motion";
import { CiPlay1 } from "react-icons/ci";

const ImgSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 4
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 3) % 4
      );
      return updatedIndexes;
    });
  };

  const images = [Slide1, Slide2, Slide3, Slide4];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 2, zIndex: 5 }, // Zoomed scale for the center image
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="h-customHeight bg-black">
      <div className="relative h-full flex items-center justify-center">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 1}}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
      </div>
      <div className="absolute top-1/3 transform -translate-y-1/2 left-1">
        <button
          className="text-white bg-blue-400 rounded-md p-2 rotate-180"
          onClick={handleBack}
        >
          <CiPlay1 />
        </button>
      </div>
      <div className="absolute top-1/3 transform -translate-y-1/2 right-1">
        <button
          className="text-white bg-blue-400 rounded-md p-2"
          onClick={handleNext}
        >
          <CiPlay1 />
        </button>
      </div>
    </header>
  );
};

export default ImgSlider;
