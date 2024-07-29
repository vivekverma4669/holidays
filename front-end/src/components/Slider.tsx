/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

interface SimpleSliderProps {
  images: string[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-[350px] overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <FcPrevious
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl bg-black bg-opacity-50  rounded-full"
      />
      
      <FcNext 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-black bg-opacity-50  rounded-full"
      />
      
    </div>
  );
};

export default SimpleSlider;
