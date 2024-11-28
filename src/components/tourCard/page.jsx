import React from "react";
import Image from "next/image";
const TourCard = ({
  area,
  cost,
  visitors,
  seasonality,
  days,
  nights,
  image,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <Image
        src={image}
        width={400}
        height={200}
        alt={area}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-red-600 transition duration-300">
          {area}
        </h3>
        <p className="text-gray-600">Cost: {cost}</p>
        <p className="text-gray-600">Visitors: {visitors}</p>
        <p className="text-gray-600">Best Season: {seasonality}</p>
        <p className="text-gray-600">
          Duration: {days} days / {nights} nights
        </p>
        <button className="text-center bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg  transition duration-300 btn btn-outline border-0 border-b-4 mt-4 ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TourCard;
