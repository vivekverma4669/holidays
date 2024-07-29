"use client";
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import SimpleSlider from "@/components/Slider";


interface Tour {
  _id: string;
  title: string;
  place: string;
  price: number;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string }[];
  hotelDetails: { city: string; deluxe: { pricePerPerson: number }; premium: { pricePerPerson: number } }[];
}

const TourDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://holidays-r3z9.onrender.com/api/tours/${id}`)
        .then((res) => res.json())
        .then((data) => setTour(data));
    }
  }, [id]);

  const handleBook = () => {
    alert(`Your booking has been successful for the tour ${tour?.title}`);
    router.push('/');
  };

  if (!tour) {
    return (
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-violet-400">
        Loading...
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 w-[85%] mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row justify-between gap-2 w-[85%] m-auto">
            <div className="sm:w-1/2 font-bold text-xl text-gray-600 hover:text-violet-400">
              Discover {tour.title} : A Journey of Elegance and Adventure Awaits!
            </div>
            <div className="flex gap-2 justify-end">
              <div className="flex gap-2 hover:bg-gray-100 cursor-pointer p-2 items-center text-gray-400 rounded-lg group">
                <IoShareOutline className="group-hover:scale-125 text-lg duration-500" />
                <h2>Share</h2>
              </div>
              <div className="flex gap-2 group hover:bg-gray-100 cursor-pointer p-2 items-center text-gray-400 rounded-lg">
                <FaRegHeart className="group-hover:scale-125 text-lg duration-500" />
                <h2>Save</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-evenly">
            <div className="sm:w-1/2 gap-4 flex">
              <SimpleSlider images={tour.images} />
            </div>
            <div className="flex flex-col">
              <div className="p-4 shadow-lg flex flex-col gap-3">
                <div className="flex w-full h-4">
                  <div className="bg-red-500 w-[5%] h-2"></div>
                  <div className="bg-blue-500 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-violet-950"></div>
                  <div className="bg-pink-500 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-slate-600"></div>
                  <div className="bg-green-500 w-[5%] h-2"></div>
                  <div className="bg-blue-500 w-[5%] h-2"></div>
                  <div className="bg-gray-700 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-violet-500"></div>
                  <div className="bg-red-500 w-[5%] h-2"></div>
                  <div className="bg-red-500 w-[5%] h-2"></div>
                  <div className="bg-blue-500 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-violet-950"></div>
                  <div className="bg-pink-500 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-slate-600"></div>
                  <div className="bg-green-500 w-[5%] h-2"></div>
                  <div className="bg-blue-500 w-[5%] h-2"></div>
                  <div className="bg-gray-700 w-[5%] h-2"></div>
                  <div className="w-[5%] h-2 bg-violet-500"></div>
                  <div className="bg-red-500 w-[5%] h-2"></div>
                </div>
                <div className="flex gap-2 justify-center text-center mx-auto">
                  <p className="text-gray-500">Starting From </p>
                  <h2 className="text-black font-semibold text-lg hover:scale-110 duration-700">
                    INR ₹{tour.price}
                  </h2>
                </div>
                <div className="border-2 border-r-gray-200 rounded-lg flex flex-col justify-start px-2">
                  <h2 className="text-lg font-semibold">Date</h2>
                  <input type="date" className="block p-2 mt-1" />
                </div>
                <div
                  className="bg-blue-700 w-full cursor-pointer rounded-lg p-3 text-white group hover:bg-blue-300 duration-700"
                  onClick={handleBook}
                >
                  <h2 className="text-center text-lg group-hover:scale-125 duration-700">Book Now</h2>
                </div>
                <div className="flex gap-4 my-6">
                  <div className="border-2 text-center rounded-full p-2">
                    <FaRegHeart className="text-2xl text-gray-500 hover:text-red-200 duration-700 hover:scale-125" />
                  </div>
                  <p className="text-gray-400 text-start">
                    94% of transaction implement this application
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-gray-300 w-full"></div>
          <div>
            {tour.itinerary.map((el) => (
              <div key={el.day} className="flex gap-4 mt-6 items-center text-gray-500">
                <div className="p-2 w-[4rem] h-[4rem] rounded-full bg-slate-200 flex items-center justify-center">
                  Day {el.day}
                </div>
                <div>{el.title}</div>
              </div>
            ))}
          </div>
          <div className="h-[2px] bg-gray-300 mx-auto"></div>
          <div className="">
            <h2 className="font-bold text-lg text-gray-600">Hotel Details</h2>
            {tour.hotelDetails.map((el, index) => (
              <div key={index}>
                <table className="w-full text-center">
                  <thead>
                    <tr>
                      <th className="border-2">City</th>
                      <th className="border-2">Deluxe</th>
                      <th className="border-2">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2">{el.city}</td>
                      {/* <td className="border-2">₹{el.deluxe.pricePerPerson}</td> */}
                      {/* <td className="border-2">₹{el.premium.pricePerPerson}</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="h-[2px] bg-gray-300 w-full"></div>
          <div>
            <h2 className="font-bold text-xl text-gray-700 my-4">Important Information</h2>
            <p className="font-semibold text-lg text-gray-700 my-4">Inclusion</p>
            {tour.inclusions.map((el, i) => (
              <ol key={i}>
                <li className="text-gray-500">{el}</li>
              </ol>
            ))}
          </div>
          <div className="h-[2px] bg-gray-300 w-full mx-auto"></div>
          <div>
            <p className="font-semibold text-lg text-gray-700 my-4 capitalize">Exclusions</p>
            {tour.exclusions.map((el, i) => (
              <ol key={i}>
                <li className="text-gray-500">{el}</li>
              </ol>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
