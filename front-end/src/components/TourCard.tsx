/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface TourCardProps {
  tour: {

    _id: string;
    title: string;
    place: string;
    price: number;
    images: string[];
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
    console.log(tour)
  return (
      <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img src={tour.images?tour.images[0]:"https://dummyimage.com/300x300/000/fff.png"} alt={tour.title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h2 className="text-lg font-bold">{tour.title}</h2>
          <p className="mt-1">₹{tour.price}</p>
        </div>
      </div>
    </div >
  );
};

export default TourCard;
