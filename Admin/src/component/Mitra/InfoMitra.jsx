import React from "react";
import { useParams } from "react-router-dom";

const MitraInfo = ({ data }) => {
  const { id } = useParams();
  const mitra = data.find((item) => item.id === parseInt(id));

  if (!mitra) {
    return <div className="container mx-auto p-4">Mitra tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Mitra</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="namaMitra" className="text-gray-600 block mb-2">Nama Mitra</label>
          <input
            type="text"
            id="namaMitra"
            name="namaMitra"
            value={mitra.namaMitra}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="alamat" className="text-gray-600 block mb-2">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={mitra.alamat}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="email" className="text-gray-600 block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={mitra.email}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="nomorTelepon" className="text-gray-600 block mb-2">Nomor Telepon</label>
          <input
            type="tel"
            id="nomorTelepon"
            name="nomorTelepon"
            value={mitra.nomorTelepon}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default MitraInfo;
