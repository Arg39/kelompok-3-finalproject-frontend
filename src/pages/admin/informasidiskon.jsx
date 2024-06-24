import React from 'react';
import { useParams } from 'react-router-dom';

const dummyDiskonData = [
  {
    id: 1,
    namaDiskon: 'Diskon Akhir Tahun',
    deskripsi: 'Diskon 50% untuk semua produk',
    persentase: 50,
    tanggalMulai: '2024-12-01',
    tanggalSelesai: '2024-12-31',
  },
  {
    id: 2,
    namaDiskon: 'Diskon Lebaran',
    deskripsi: 'Diskon 30% untuk produk tertentu',
    persentase: 30,
    tanggalMulai: '2024-04-01',
    tanggalSelesai: '2024-04-30',
  },
  {
    id: 3,
    namaDiskon: 'Diskon Natal',
    deskripsi: 'Diskon 40% untuk semua produk',
    persentase: 40,
    tanggalMulai: '2024-12-20',
    tanggalSelesai: '2024-12-25',
  },
];

const InfoDiskon = () => {
  const { id } = useParams();
  const diskon = dummyDiskonData.find((item) => item.id === parseInt(id));

  if (!diskon) {
    return <div className="container mx-auto p-4">Diskon tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Diskon</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="namaDiskon" className="text-gray-600 block mb-2">Nama Diskon</label>
          <input
            type="text"
            id="namaDiskon"
            name="namaDiskon"
            value={diskon.namaDiskon}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="deskripsi" className="text-gray-600 block mb-2">Deskripsi</label>
          <input
            type="text"
            id="deskripsi"
            name="deskripsi"
            value={diskon.deskripsi}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="persentase" className="text-gray-600 block mb-2">Persentase</label>
          <input
            type="text"
            id="persentase"
            name="persentase"
            value={`${diskon.persentase}%`}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="tanggalMulai" className="text-gray-600 block mb-2">Tanggal Mulai</label>
          <input
            type="text"
            id="tanggalMulai"
            name="tanggalMulai"
            value={diskon.tanggalMulai}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="tanggalSelesai" className="text-gray-600 block mb-2">Tanggal Selesai</label>
          <input
            type="text"
            id="tanggalSelesai"
            name="tanggalSelesai"
            value={diskon.tanggalSelesai}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default InfoDiskon;
