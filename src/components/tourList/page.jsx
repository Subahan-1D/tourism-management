import React from "react";
import TourCard from "../tourCard/page";

const TourList = () => {
  const tours = [
    {
      id: 1,
      area: "Cox's Bazar",
      cost: "$150",
      visitors: "5000+",
      seasonality: "Winter",
      days: 3,
      nights: 2,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732718373/cox1_nwwxku.jpg",
    },
    {
      id: 2,
      area: "Sundarbans",
      cost: "$200",
      visitors: "3500+",
      seasonality: "Spring",
      days: 4,
      nights: 3,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732718897/sundor1_jm6nxh.jpg",
    },
    {
      id: 3,
      area: "Bandarban",
      cost: "$180",
      visitors: "4500+",
      seasonality: "Summer",
      days: 5,
      nights: 4,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732719377/bandorbon_gwzhqr.jpg",
    },
    {
      id: 4,
      area: "Sylhet",
      cost: "$120",
      visitors: "3000+",
      seasonality: "Monsoon",
      days: 2,
      nights: 1,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732719469/slyhet_j1voz8.jpg",
    },
    {
      id: 5,
      area: "Rangamati",
      cost: "$140",
      visitors: "4000+",
      seasonality: "Autumn",
      days: 3,
      nights: 2,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732719536/rangamati_e3xlkm.jpg",
    },
    {
      id: 6,
      area: "Khagrachuri",
      cost: "$140",
      visitors: "4000+",
      seasonality: "Autumn",
      days: 3,
      nights: 2,
      image:
        "https://res.cloudinary.com/dospsrwzj/image/upload/v1732719686/khagrachuri_cmurcr.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
