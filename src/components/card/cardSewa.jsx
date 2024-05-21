import React from "react";
import Rating from "../rating/rating";
import { Link } from "react-router-dom";

export default function Cardsewa() {
  const name = "Villa Sejahte rada sda dasdasda sdsada sda";
  const place = "Kalimantan Balikpapan utara,";
  const price = "18000";
  return (
    <div className="flex justify-center">
      <div className="w-80 h-80 bg-primary-50">
        <Link to={"/sewa/detail/"}>
          <img
            className="w-full h-2/3 object-cover object-center"
            src="images/home/money.jpg"
            alt="Properti"
          />
        </Link>
        <div className="py-2 px-4">
          <Link
            to={"/sewa/detail/"}
            className="w-auto font-montserrat font-bold text-xl line-clamp-1 text-tertiary-700 mb-2 hover:text-tertiary-400"
          >
            {name}
          </Link>
          <div className="flex flex-row justify-between mb-1">
            <p className="line-clamp-1 font-montserrat text-tertiary-700 font-light">
              {place}
            </p>
            <div className="text-secondary-600">
              <Rating rate="4" />
            </div>
          </div>
          <p className="ine-clamp-1 font-montserrat text-xl font-semibold text-secondary-600">
            Rp. {price}
          </p>
        </div>
      </div>
    </div>
  );
}
