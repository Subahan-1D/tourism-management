import React from "react";

const BannerPage = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem] relative"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/61xfFCn/tourism2.jpg")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white lg:text-5xl leading-tight">
            Explore the Beauty of <span className="text-yellow-400">Tourism Thailand</span>
          </h1>
          <p className="text-lg text-gray-300 lg:text-xl">
            Tourism breathtaking destinations and create unforgettable memories.
          </p>
          <button className="px-6 py-3 mt-4 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition duration-300">
            Book Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
