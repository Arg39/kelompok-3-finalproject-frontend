import React from "react";
import { useDispatch } from "react-redux";
import { all, villa, hotel, apartemen } from "../../redux/slices/sewaSlice";

export default function Navsewa(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1200px] p-4 px-8 flex justify-between bg-primary-50 rounded-md">
          <div className="flex items-center flex-row gap-4">
            <button
              onClick={() => dispatch(all())}
              className={`p-2 px-6 font-montserrat font-medium text-lg ${
                props.NavCard === "all"
                  ? "bg-secondary-700 rounded-full text-white"
                  : "text-quaternary-900 hover:bg-secondary-300 hover:text-white"
              } rounded-full`}
            >
              All
            </button>
            <button
              onClick={() => dispatch(villa())}
              className={`p-2 px-6 font-montserrat font-medium text-lg ${
                props.NavCard === "villa"
                  ? "bg-secondary-700 rounded-full text-white"
                  : "text-tertiary-900 hover:bg-secondary-300 hover:text-white"
              } rounded-full`}
            >
              Villa
            </button>
            <button
              onClick={() => dispatch(hotel())}
              className={`p-2 px-6 font-montserrat font-medium text-lg ${
                props.NavCard === "hotel"
                  ? "bg-secondary-700 rounded-full text-white"
                  : "text-tertiary-900 hover:bg-secondary-300 hover:text-white"
              } rounded-full`}
            >
              Hotel
            </button>
            <button
              onClick={() => dispatch(apartemen())}
              className={`p-2 px-6 font-montserrat font-medium text-lg ${
                props.NavCard === "apartemen"
                  ? "bg-secondary-700 rounded-full text-white"
                  : "text-tertiary-900 hover:bg-secondary-300 hover:text-white"
              } rounded-full`}
            >
              Apartemen
            </button>
          </div>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-primary-900"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="py-2 ml-4 font-montserrat text-lg font-normal  bg-white w-[500px] rounded-lg focus:outline-none hover:cursor-pointer"
              type="text"
              placeholder="Name, Location..."
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-tertiary-700"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
