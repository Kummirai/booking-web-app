import Card from "@/components/blocks/Card";
import Hero from "@/components/blocks/Hero";
import { headers } from "next/headers";
import { Suspense } from "react";
import SpinnerCustom from "./loading-spinner";

export async function SearchHotels() {
  //Create booking dates 7 days from today
  const searchHotels = async () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate() + 7;
    const today = `${currentYear}-${currentMonth < 10 ? "0" + currentMonth : currentMonth}-${currentDay}`;
    const tomorrow = `${currentYear}-${currentMonth < 10 ? "0" + currentMonth : currentMonth}-${currentDay + 1}`;

    const headersList = await headers();

    // Get IP from headers
    const ip =
      headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "";

    // Get country from IP
    let country = "za"; // Default

    if (ip && ip !== "::1" && !ip.startsWith("127.")) {
      try {
        // Using ip-api.com (free tier)
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();

        if (data.status === "success") {
          country = data.countryCode;
        }
      } catch (error) {
        console.error("Failed to get location from IP:", error);
      }
    }

    try {
      const params = new URLSearchParams({
        engine: "google_hotels",
        q: "Resort",
        gl: country,
        hl: "en",
        currency: "ZAR",
        check_in_date: today,
        check_out_date: tomorrow,
        adults: "1",
        children: "0",
        api_key: process.env.SERP_API_KEY,
      });

      const response = await fetch(`https://serpapi.com/search.json?${params}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };
  const data = await searchHotels();
  const hotels = data.properties;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 md:max-w-5xl px-5 md:px-10 lg:px-0 gap-10 mx-auto mt-20 py-20">
      {hotels?.map((hotel) =>
        !hotel.description ? " " : <Card key={hotel.name} hotel={hotel} />,
      )}
    </div>
  );
}

export default async function page() {
  //fetch bookings

  return (
    <>
      <Hero />
      <Suspense fallback={<SpinnerCustom />}>
        <SearchHotels />
      </Suspense>
    </>
  );
}
