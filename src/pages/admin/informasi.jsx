import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import ModalForm from "../../components/Button/Modalform";
import ButtonTambah from "../../components/Button/buttonTambah";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "Informasi", url: "/admin/informasi", pageUrl: "informasi" },
    { title: "Data Owner", url: "/admin/dataowner", pageUrl: "dataowner" },
    { title: "Data User", url: "/admin/datauser", pageUrl: "datauser" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [diskon, setDiskon] = useState([
    {
      id: 1,
      namaDiskon: 'Diskon Akhir Tahun',
      deskripsi: 'Diskon 50% untuk semua produk',
      persentase: 50,
      tanggalMulai: '2024-12-01',
      tanggalSelesai: '2024-12-31',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const handleOpenModal = (data = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleSaveDiskon = (newData) => {
    if (editData) {
      setDiskon(diskon.map(item => item.id === editData.id ? { ...item, ...newData } : item));
    } else {
      setDiskon([...diskon, { id: diskon.length + 1, ...newData }]);
    }
    handleCloseModal();
  };

  const handleDeleteDiskon = (id) => {
    setDiskon(diskon.filter(item => item.id !== id));
  };

  const formFieldsDiskon = [
    { name: 'namaDiskon', label: 'Nama Diskon', type: 'text', required: true },
    { name: 'deskripsi', label: 'Deskripsi', type: 'text', required: true },
    { name: 'persentase', label: 'Persentase', type: 'number', required: true },
    { name: 'tanggalMulai', label: 'Tanggal Mulai', type: 'date', required: true },
    { name: 'tanggalSelesai', label: 'Tanggal Selesai', type: 'date', required: true },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = diskon.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(diskon.length / itemsPerPage);

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
    navigate(`/diskon-info/${id}`);
  };

  return (
    <div className="flex">
      <Sidebar
        dashboardUrl="/admin/dashboard"
        profilUrl="/admin/profile"
        otherNav={otherNav}
        page={"informasi"}
      />
      <div className="flex-1 ml-[300px] p-4">
        <h1 className="text-2xl font-semibold text-gray-800 pb-16">Dashboard</h1>
        <div>
          <ButtonTambah onClick={() => handleOpenModal()}>Tambah</ButtonTambah>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">ID</th>
                <th className="py-2 px-4 border-b border-gray-200">Nama Diskon</th>
                <th className="py-2 px-4 border-b border-gray-200">Deskripsi</th>
                <th className="py-2 px-4 border-b border-gray-200">Persentase</th>
                <th className="py-2 px-4 border-b border-gray-200">Tanggal Mulai</th>
                <th className="py-2 px-4 border-b border-gray-200">Tanggal Selesai</th>
                <th className="py-2 px-4 border-b border-gray-200">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr className="text-center" key={item.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.namaDiskon}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.deskripsi}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.persentase}%</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.tanggalMulai}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{item.tanggalSelesai}</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <div className="grid gap-4 grid-cols-3">
                      <FaEye className="text-gray-500 cursor-pointer" onClick={() => handleShowInfo(item.id)} />
                      <FaPencilAlt className="text-green-500 cursor-pointer" onClick={() => handleOpenModal(item)} />
                      <FaTrashAlt className="text-red-500 cursor-pointer" onClick={() => handleDeleteDiskon(item.id)} />
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
        <ModalForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSaveDiskon}
          formFields={formFieldsDiskon}
          title={editData ? "Edit Diskon" : "Tambah Diskon"}
          initialData={editData}
        />
      </div>
    </div>
  );
}
