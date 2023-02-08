import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider({ images = [] }) {
  // Create state variables for the index and image array
  const [index, setIndex] = useState(0);

  // Use useEffect to increment the index and update the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Render the current image
  return (
    <div id="image-slider">
      <img src={images[index]} alt="Slider" id="slider-image" />
    </div>
  );
}

export default ImageSlider;
