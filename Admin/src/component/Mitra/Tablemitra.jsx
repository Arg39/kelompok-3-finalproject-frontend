import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalForm from '@/component/Modalform';
import ButtonTambah from '@/component/buttonTambah';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

function TableMitra() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [mitra, setMitra] = useState([
    {
      id: 1,
      namaMitra: 'PT. Hotel Indonesia',
      alamat: 'JL. Kenari',
      email: 'hotel@gmail.com',
      nomorTelepon: '0982873898938',
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

  const handleSaveMitra = (newData) => {
    if (editData) {
      setMitra(mitra.map(item => item.id === editData.id ? { ...item, ...newData } : item));
    } else {
      setMitra([...mitra, { id: mitra.length + 1, ...newData }]);
    }
    handleCloseModal();
  };

  const formFieldsMitra = [
    { name: 'namaMitra', label: 'Nama Mitra', type: 'text', required: true },
    { name: 'alamat', label: 'Alamat', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'nomorTelepon', label: 'Nomor Telepon', type: 'tel', required: true },
  ];

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
    navigate(`/mitra-info/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <ButtonTambah onClick={() => handleOpenModal()}>Tambah</ButtonTambah>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Nama Mitra</th>
              <th className="py-2 px-4 border-b border-gray-200">Alamat</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Nomor Telepon</th>
              <th className="py-2 px-4 border-b border-gray-200">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr className="text-center" key={item.id}>
                <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.namaMitra}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.alamat}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.nomorTelepon}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="grid gap-4 grid-cols-3">
                    <FaEye className="text-gray-500 cursor-pointer" onClick={() => handleShowInfo(item.id)} />
                    <FaPencilAlt className="text-green-500 cursor-pointer" onClick={() => handleOpenModal(item)} />
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
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSaveMitra}
        formFields={formFieldsMitra}
        title={editData ? "Edit Mitra" : "Tambah Mitra"}
        initialData={editData}
      />
    </div>
  );
}

export default TableMitra;
