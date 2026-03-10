import React from "react";
import Image from "next/image";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

export default function Card({ ...room }) {
  return (
    <div className="">
      <div className="">
        <Image
          src={room.image}
          alt={room.id}
          width={500}
          height={200}
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="border border-gray-100">
        <div className="px-5">
          <div className="flex items-center justify-between pt-5 ">
            <p>
              <span className="text-3xl font-bold relative bg-linear-to-r from-[#764de1] to-indigo-600 bg-clip-text text-transparent mr-1">
                <span>$</span> {room.pricePerNight}
              </span>
              <span className="text-sm text-gray-500">/per night</span>
            </p>
            <p className="flex items-center">
              <span className="mr-1">
                <FaStar className="text-yellow-300" />
              </span>
              <span>{room.rating}</span>
            </p>
          </div>
          <div>
            <p className="text-xl pt-2 font-bold relative bg-linear-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
              {room.name}
            </p>
          </div>
          <div className="flex items-center justify-between py-4 mt-5 border-t border-t-gray-100 rounded-b-2xl text-gray-500">
            <div>
              <p className="flex items-center">
                <span className="mr-1">
                  <FaBed />
                </span>
                <span>{room.beds} bed</span>
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <span className="mr-1">
                  <FaBath />
                </span>
                <span>{room.bathrooms} Bath</span>
              </p>
            </div>
            <div>
              <p>
                <LuSquareArrowOutUpRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
