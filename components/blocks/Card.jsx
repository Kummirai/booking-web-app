import React from "react";
import Image from "next/image";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


export default function Card({ hotel }) {
  const createRating = (rating) => {
    const remainder = rating % 1;
    const whole = Math.trunc(rating);
    const fullStar = "★";
    const halfFullStar = "⯨";
    const emptyStar = "☆";

    let stars = "";

    for (let i = 0; i < whole; i++) {
      stars += fullStar;
    }

    if (remainder) {
      stars += halfFullStar;
    }
    console.log(stars);
    return stars;
  };

  return (
    <div className="h-115 flex flex-col">
      <div className="relative max-w-200 h-50 object-cover ">
        <Image
          src={hotel.images[0]?.thumbnail}
          alt={hotel.property_token}
          fill
          className="rounded-t-sm"
          placeholder="blur"
          blurDataURL="..."
        />
      </div>
      <div className=" relative border border-indigo-50 rounded-b-md grow">
        <div className="px-5">
          <div className="flex flex-col items-start justify-between pt-5 ">
            <p>
              <span className="text-3xl font-bold  text-[#10214b] mr-1">
                {hotel.rate_per_night.before_taxes_fees}
              </span>
              <span className="text-sm text-gray-500">/per night</span>
            </p>
            <p className="flex my-1 items-center">
              <span className="mr-1 flex items-center text-yellow-400 text-md">
                {createRating(hotel.overall_rating)}
              </span>
              <span className="text-sm text-gray-600">
                {hotel.overall_rating}
              </span>
            </p>
          </div>
          <div>
            <p className="text-md line-clamp-1 pt-1 font-bold relative bg-linear-to-r from-[#764de1] to-indigo-600 bg-clip-text text-transparent">
              {hotel.name}
            </p>
            <p>{hotel.description}</p>
          </div>

          <div className="absolute bottom-4">
            <button className="flex items-center py-1 px-5  text-white rounded-sm relative bg-linear-to-r from-purple-700 to-[#764de1] hover:cursor-pointer">
              <span className="mr-1">More details</span>
              <LuSquareArrowOutUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
