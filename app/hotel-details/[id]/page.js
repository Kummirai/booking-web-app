import Image from "next/image";
import React from "react";
import { getJson } from "serpapi";

export default async function page({ params, searchParams }) {
  const { id } = await params;
  const { q } = await searchParams;

  const hotelDetails = await getJson(
    {
      engine: "google_hotels",
      q: q,
      check_in_date: "2026-03-14",
      check_out_date: "2026-03-15",
      adults: "1",
      currency: "ZAR",
      gl: "us",
      hl: "en",
      property_token: id,
      api_key: process.env.SERP_API_KEY,
    },
    (json) => {
      return json;
    },
  );

  console.log(hotelDetails);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="relative w-150 h-100 ">
        <Image
          src={hotelDetails?.images[0]?.original_image}
          className="object-cover rounded-sm"
          alt="image"
          fill
        />
      </div>
      <h2 className="text-3xl font-semibold my-4">{hotelDetails.name}</h2>
      <p className="max-w-md text-gray-700 text-sm font-light">
        {hotelDetails.description}
      </p>
    </div>
  );
}
