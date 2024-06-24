import React from 'react';
import { useParams } from 'react-router-dom';

const dummyDataOwners = [
    {
        id: 1,
        nama: "Afif",
        alamat: "Jl. Kebon Jeruk No. 1",
        email: "afif@example.com",
        nomorTelepon: "08123456789",
      },
      {
        id: 2,
        nama: "Budi",
        alamat: "Jl. Mangga Dua No. 2",
        email: "budi@example.com",
        nomorTelepon: "08198765432",
      },
      {
        id: 3,
        nama: "Citra",
        alamat: "Jl. Kenari No. 3",
        email: "citra@example.com",
        nomorTelepon: "08134567890",
      },
];

const InfoDataOwner = () => {
  const { id } = useParams();
  const owner = dummyDataOwners.find((item) => item.id === parseInt(id));

  if (!owner) {
    return <div className="container mx-auto p-4">Data owner tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Data Owner</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="nama" className="text-gray-600 block mb-2">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
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
          <label htmlFor="noTelepon" className="text-gray-600 block mb-2">No Telepon</label>
          <input
            type="text"
            id="noTelepon"
            name="noTelepon"
            value={owner.nomorTelepon}
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
        {/* <div className="col-span-2">
          <label htmlFor="jenisKelamin" className="text-gray-600 block mb-2">Jenis Kelamin</label>
          <input
            type="text"
            id="jenisKelamin"
            name="jenisKelamin"
            value={owner.jenisKelamin}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="tanggalLahir" className="text-gray-600 block mb-2">Tanggal Lahir</label>
          <input
            type="text"
            id="tanggalLahir"
            name="tanggalLahir"
            value={owner.tanggalLahir}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div> */}
      </form>
    </div>
  );
};

export default InfoDataOwner;
