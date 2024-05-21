import React from "react";
import Navbar from "../components/navbar/navbar";
import Cardpemesanan from "../components/card/cardPemesanan";
import Footer from "../components/footer/footer";

export default function Pemesanan() {
  document.body.style.backgroundColor = "#BFC6CD";
  return (
    <div className="w-screen">
      <Navbar page="pemesanan" />
      <div className="w-full h-40 bg-gradient-to-b from-tertiary-400 to-transparent mb-8"></div>
      <h1 className="mb-20 text-center uppercase text-tertiary-700 font-montserrat font-black text-5xl">
        Pemesanan Tempat
      </h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 gap-4">
          <Cardpemesanan />
          <Cardpemesanan />
          <Cardpemesanan />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 mb-8">
        <div className="w-[900px] bg-primary-50 p-8">
          <p className="mb-4 text-3xl font-montserrat font-bold text-tertiary-700">
            Detail Pemesanan
          </p>
          <div className="flex justify-between mb-2">
            <p className="font-montserrat text-lg text-tertiary-800">
              Villa sejahtera
            </p>
            <p className="font-montserrat text-lg">Rp. 1.600.000</p>
          </div>
          <div className="mt-4 mb-4 h-[1px] bg-tertiary-900"></div>
          <div className="flex justify-between mb-2">
            <p className="font-montserrat font-extrabold text-xl text-tertiary-800">
              Total Harga
            </p>
            <p className="font-montserrat font-extrabold text-xl text-secondary-600">
              Rp. 1.600.000
            </p>
          </div>
        </div>
        <div className="m-4 mb-20">
          <button className="w-[900px] p-4 rounded-md bg-secondary-600 hover:bg-secondary-700 text-primary-50 text-xl font-montserrat font-bold">
            Lanjut Ke Pembayaran
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
