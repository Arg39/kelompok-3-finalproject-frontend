import React from "react";
import { useParams } from "react-router-dom";

const dummyOwnersData = [
    {
        id: 1,
        nama: "Afif",
        alamat: "Jl. Kebon Jeruk No. 1",
        email: "john@example.com",
        nomorTelepon: "08123456789",
      },
      {
        id: 2,
        nama: "Budi",
        alamat: "Jl. Mangga Dua No. 2",
        email: "jane@example.com",
        nomorTelepon: "08198765432",
      },
      {
        id: 3,
        nama: "Budi Utomo",
        alamat: "Jl. Kenari No. 3",
        email: "mike@example.com",
        nomorTelepon: "08134567890",
      },
];

const InfoDataOwner = () => {
  const { id } = useParams();
  const owner = dummyOwnersData.find((item) => item.id === parseInt(id));

  if (!owner) {
    return <div className="container mx-auto p-4">Data owner tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Data Owner</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="namaMitra" className="text-gray-600 block mb-2">Nama User</label>
          <input
            type="text"
            id="namaMitra"
            name="namaMitra"
            value={owner.nama}
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
            value={owner.alamat}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="email" className="text-gray-600 block mb-2">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={owner.email}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="nomorTelepon" className="text-gray-600 block mb-2">Nomor Telepon</label>
          <input
            type="text"
            id="nomorTelepon"
            name="nomorTelepon"
            value={owner.nomorTelepon}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default InfoDataOwner;
