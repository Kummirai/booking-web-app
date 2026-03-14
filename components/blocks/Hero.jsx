"use client";
import { useState } from "react";
import Search from "./Search";

export default function Hero() {
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-[url(/img/hero-bg.webp)] bg-cover bg-bottom h-screen rethink relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-gray-800">
        {/* Avatars + Stars */}
        <div className="flex items-center mt-10 ">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4"
            />
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="user5"
              className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5"
            />
          </div>

          <div>
            <div className="flex ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-transparent fill-white"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-sm text-white text-shadow-lg/20">
              {" "}
              Used by 10,000+ users{" "}
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl md:text-5xl text-white font-semibold max-w-lg md:max-w-2xl text-center mt-4 leading-tight md:leading-tight ">
          <span className="text-shadow-lg/20"> Book your next </span>
          <span className="relative bg-linear-to-r from-purple-700 to-[#764de1] bg-clip-text text-transparent">
            stay
            <div className="z-10 absolute bottom-0 left-0 w-full scale-120">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient_arc.svg"
                alt="gradient"
              />
            </div>
          </span>{" "}
          <br />
          <span className="relative bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ">
            with
          </span>{" "}
          Us
        </h1>

        <p className="max-w-xl text-center text-white font-light text-lg my-7 text-shadow-lg/20">
          Discover your perfect getaway with our seamless booking and
          exceptional stays tailored just for you.
        </p>

        {/* Search Box */}

        <Search />
      </div>
    </>
  );
}
