import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaTrashAlt } from 'react-icons/fa';

function TableTransaksi() {
  const [mitra, setMitra] = useState([
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
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mitra.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mitra.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleShowInfo = (id) => {
    navigate(`/transaksi-info/${id}`);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Sudah Membayar':
        return 'bg-green-500';
      case 'Belum Membayar':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='mx-2'>
        <h1 className='text-black text-xl font-bold'>Transaksi Penyewaan</h1>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Nama</th>
              <th className="py-2 px-4 border-b border-gray-200">Nama Gedung</th>
              <th className="py-2 px-4 border-b border-gray-200">Kamar</th>
              <th className="py-2 px-4 border-b border-gray-200">Tanggal Masuk</th>
              <th className="py-2 px-4 border-b border-gray-200">Tanggal Keluar</th>
              <th className="py-2 px-4 border-b border-gray-200">Jam Masuk</th>
              <th className="py-2 px-4 border-b border-gray-200">Jam Keluar</th>
              <th className="py-2 px-4 border-b border-gray-200">Total</th>
              <th className="py-2 px-4 border-b border-gray-200">Status</th>
              <th className="py-2 px-4 border-b border-gray-200">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr className="text-center" key={item.id}>
                <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.nama}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.namaGedung}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.kamar}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.tanggalMasuk}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.tanggalKeluar}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.jamMasuk}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.jamKeluar}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.total}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className={`p-2 text-white text-xs ${getStatusClass(item.status)}`}>
                    {item.status}
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="grid gap-4 grid-cols-3">
                    <FaEye className="text-gray-500 cursor-pointer" onClick={() => handleShowInfo(item.id)} />
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className={`py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TableTransaksi;
