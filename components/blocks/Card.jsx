import React from "react";
import Image from "next/image";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { MdNoMealsOuline } from "react-icons/md";
import { MdGolfCourse } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaHotTub } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Card({ hotel }) {
  console.log(hotel);
  const amenityIcons = [
    { id: 1, amenity: "Pool", icon: <MdPool /> },
    { id: 2, amenity: "Pet-friendly", icon: <FaDog /> },
    { id: 3, amenity: "Kid-friendly", icon: <FaChildren /> },
    { id: 4, amenity: "Restaurant", icon: <MdNoMealsOuline /> },
    { id: 5, amenity: "Golf", icon: <MdGolfCourse /> },
    { id: 6, amenity: "Outdoor pool", icon: <FaSwimmingPool /> },
    { id: 7, amenity: "Free breakfast", icon: <MdFreeBreakfast /> },
    { id: 8, amenity: "Air conditioning", icon: <TbAirConditioning /> },
    { id: 9, amenity: "Hot tub", icon: <FaHotTub /> },
  ];

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
              <span className="mr-1">
                <FaStar className="text-yellow-300" />
                <CiStar />
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
          {/* <div className="grid grid-cols-2 gap-2 py-4 mt-5 border-t border-t-gray-100 rounded-b-2xl text-gray-500 ">
            {hotel.amenities?.map((amenity, index) => {
              return (
                <div key={amenity}>
                  <p className="flex items-center ">
                    {amenityIcons.map((amenityIcon, index) => {
                      amenity === amenityIcon.amenity ? (
                        <span key={index} className="mr-1 ">
                          {amenityIcon.icon}
                          here
                        </span>
                      ) : (
                        <FaHotTub />
                      );
                    })}

                    <span className="font-sans line-clamp-1">{amenity}</span>
                  </p>
                </div>
              );
            })}
          </div> */}
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
