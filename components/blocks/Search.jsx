import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form className="shadow-2xl rounded-lg py-5 px-8 bg-white flex flex-col sm:flex-row items-center gap-8 h-fit">
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold text-lg">
          Where
        </label>
        <input
          className="bg-gray-100 rounded-sm py-1 px-3 text-lg"
          placeholder="Search for destinations"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold text-lg">
          Check In
        </label>
        <input
          className="bg-gray-100 text-gray-400  rounded-sm py-1 px-3 text-lg text-center"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold  text-lg">
          Check Out
        </label>
        <input
          className="bg-gray-100 text-gray-400 rounded-sm py-1 px-3 text-lg"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-1 items-center w-1/2">
        <label htmlFor="" className="font-semibold text-lg">
          Who
        </label>
        <input
          className="bg-gray-100 rounded-sm px-3 py-1 text-lg"
          placeholder="Number of guests"
          type={"number"}
        />
      </div>
      <button className="flex flex-col items-center p-3 justify-center relative bg-linear-to-r from-purple-700 to-[#764de1]  rounded-full hover:cursor-pointer hover:bg-linear-to-r hover:from-purple-600 hover:to-[#8c65ee]">
        <FaSearch className="text-2xl text-white" />
      </button>
    </form>
  );
}
