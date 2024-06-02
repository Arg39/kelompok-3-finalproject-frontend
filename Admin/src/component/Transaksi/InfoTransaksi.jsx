import React from 'react';
import { useParams } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    nama: 'Afif',
    namaGedung: 'Hotel Indonesia',
    kamar: '303',
    tanggalMasuk: '31-05-2024',
    tanggalKeluar: '01-06-2024',
    jamMasuk: '16.00 WIB',
    jamKeluar: '14.00 WIB',
    total: '200000',
    status: 'Sudah Membayar',
  },
  {
    id: 2,
    nama: 'Budi',
    namaGedung: 'Hotel XYZ',
    kamar: '101',
    tanggalMasuk: '01-06-2024',
    tanggalKeluar: '02-06-2024',
    jamMasuk: '12.00 WIB',
    jamKeluar: '11.00 WIB',
    total: '150000',
    status: 'Belum Membayar',
  },
  {
    id: 3,
    nama: 'Budi Utomo',
    namaGedung: 'Hotel XYZ',
    kamar: '101',
    tanggalMasuk: '01-06-2024',
    tanggalKeluar: '02-06-2024',
    jamMasuk: '12.00 WIB',
    jamKeluar: '11.00 WIB',
    total: '150000',
    status: 'Dibatalkan',
  },
];

const InfoTransaksi = () => {
  const { id } = useParams();
  const transaksi = dummyData.find((item) => item.id === parseInt(id));

  if (!transaksi) {
    return <div className="container mx-auto p-4">Transaksi tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Informasi Transaksi</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="nama" className="text-gray-600 block mb-2">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={transaksi.nama}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="namaGedung" className="text-gray-600 block mb-2">Nama Gedung</label>
          <input
            type="text"
            id="namaGedung"
            name="namaGedung"
            value={transaksi.namaGedung}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="kamar" className="text-gray-600 block mb-2">Kamar</label>
          <input
            type="text"
            id="kamar"
            name="kamar"
            value={transaksi.kamar}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="tanggalMasuk" className="text-gray-600 block mb-2">Tanggal Masuk</label>
          <input
            type="text"
            id="tanggalMasuk"
            name="tanggalMasuk"
            value={transaksi.tanggalMasuk}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="tanggalKeluar" className="text-gray-600 block mb-2">Tanggal Keluar</label>
          <input
            type="text"
            id="tanggalKeluar"
            name="tanggalKeluar"
            value={transaksi.tanggalKeluar}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="jamMasuk" className="text-gray-600 block mb-2">Jam Masuk</label>
          <input
            type="text"
            id="jamMasuk"
            name="jamMasuk"
            value={transaksi.jamMasuk}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="jamKeluar" className="text-gray-600 block mb-2">Jam Keluar</label>
          <input
            type="text"
            id="jamKeluar"
            name="jamKeluar"
            value={transaksi.jamKeluar}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="total" className="text-gray-600 block mb-2">Total</label>
          <input
            type="text"
            id="total"
            name="total"
            value={transaksi.total}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="status" className="text-gray-600 block mb-2">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={transaksi.status}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default InfoTransaksi;
