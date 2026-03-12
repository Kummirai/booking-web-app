import React from "react";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form className="shadow-2xl max-w-5xl rounded-lg py-5 px-8 bg-white flex flex-col sm:flex-row items-center gap-8 h-fit">
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold text-md">
          Where
        </label>
        <input
          className="bg-gray-100 rounded-sm py-1 px-5 text-md font-light"
          placeholder="Search for destinations"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold text-md">
          Check In
        </label>
        <input
          className="bg-gray-100 text-gray-400  rounded-sm py-1 px-5 text-md text-center font-light"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="" className="font-semibold  text-md">
          Check Out
        </label>
        <input
          className="bg-gray-100 text-gray-400 rounded-sm py-1 px-5 text-md font-light"
          type="date"
        />
      </div>
      <div className="flex flex-col gap-1 items-center w-1/2">
        <label htmlFor="" className="font-semibold text-md">
          Who
        </label>
        <input
          className="bg-gray-100 rounded-sm px-5 py-1 text-md font-light"
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
