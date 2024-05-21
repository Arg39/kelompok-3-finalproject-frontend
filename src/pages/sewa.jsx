import React from "react";
import Navbar from "../components/navbar/navbar";
import Navsewa from "../components/navbar/navSewa";
import ImageSlide from "../components/imageSlider/imageSlide";
import Cardsewa from "../components/card/cardSewa";
import Footer from "../components/footer/footer";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Sewa() {
  document.body.style.backgroundColor = "#BFC6CD";
  const nav = useSelector((state) => state.sewa.nav);

  return (
    <div>
      <Navbar page="sewa" />
      <div className="relative">
        <img
          className="w-screen h-80 object-cover hero-image"
          style={{ "--mask-start": "20%", "--mask-end": "60%" }}
          src="images/sewa/kota.jpg"
          alt="Properti"
        />
        <p className="absolute bottom-16 w-full text-center uppercase text-tertiary-700 font-montserrat font-black text-7xl p-2 px-4 mb-8">
          SEWA
        </p>
      </div>
      <Link to={"/testapi"}>api</Link>
      <div className="mt-8">
        <Navsewa NavCard={nav} />
      </div>
      <div className="">
        <p className="flex justify-center mt-12 mb-4 text-2xl text-secondary-900 font-montserrat font-bold">
          Penawaran Spesial dari Kami untuk Anda!
        </p>
        <div className="mb-20">
          <ImageSlide />
        </div>
        <p className="flex justify-center mt-12 mb-4 text-2xl text-secondary-900 font-montserrat font-bold">
          Temukan pilihanmu! Sewa Sekarang dan Nikmati Liburan Tak Terlupakan.
        </p>
      </div>
      <div className="grid grid-cols-4 justify-center gap-y-16 mt-16 mb-16">
        <Cardsewa />
        <Cardsewa />
        <Cardsewa />
        <Cardsewa />
        <Cardsewa />
        <Cardsewa />
      </div>
      <Footer />
    </div>
  );
}
