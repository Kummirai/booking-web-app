export default function Search() {
  return (
    <form className="bg-white text-gray-500 border border-indigo-100 rounded-lg px-8 py-5 w-full flex justify-between flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto">
      <div>
        <div className="flex items-center  gap-2">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <label htmlFor="destinationInput">Destination</label>
        </div>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none grow"
          placeholder="Type here"
          required
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <label htmlFor="checkIn">Check in</label>
        </div>
        <input
          id="checkIn"
          type="date"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none grow"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <label htmlFor="checkOut">Check out</label>
        </div>
        <input
          id="checkOut"
          type="date"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none grow"
        />
      </div>

      <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
          placeholder="0"
        />
      </div>

      <button className="flex items-center justify-center gap-1 rounded-md bg-indigo-500 py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
}
