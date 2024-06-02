import React from "react";
import { useParams } from "react-router-dom";

const GedungInfo = ({ data }) => {
  const { id } = useParams();
  const gedung = data.find((item) => item.id === parseInt(id));

  if (!gedung) {
    return <div className="container mx-auto p-4">Gedung tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Gedung</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="kategori" className="text-gray-600 block mb-2">Kategori</label>
          <input
            type="text"
            id="kategori"
            name="kategori"
            value={gedung.kategori}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="gambar" className="text-gray-600 block mb-2">Gambar</label>
          <img
            src={gedung.gambar}
            alt={gedung.nama}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="nama" className="text-gray-600 block mb-2">Nama Gedung</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={gedung.nama}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="namaMitra" className="text-gray-600 block mb-2">Nama Mitra</label>
          <input
            type="text"
            id="namaMitra"
            name="namaMitra"
            value={gedung.namaMitra}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="deskripsiGedung" className="text-gray-600 block mb-2">Deskripsi Gedung</label>
          <textarea
            id="deskripsiGedung"
            name="deskripsiGedung"
            value={gedung.deskripsiGedung}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>
        </div>
        <div className="col-span-2">
          <label htmlFor="alamat" className="text-gray-600 block mb-2">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={gedung.alamat}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="price" className="text-gray-600 block mb-2">Harga</label>
          <input
            type="text"
            id="price"
            name="price"
            value={gedung.price}
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
            value={gedung.email}
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
            value={gedung.nomorTelepon}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default GedungInfo;
