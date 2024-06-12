import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalForm from '@/component/Modalform';
import ButtonTambah from '@/component/ButtonTambah';
import { FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';


function TableGedung() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [gedung, setGedung] = useState([
    {
      id: 1,
      kategori: 'Gedung',
      gambar: 'url/to/image.jpg',
      nama: 'Gedung Serbaguna',
      namaMitra: 'PT. Gedung Sejahtera',
      deskripsiGedung: 'Deskripsi Gedung Serbaguna',
      alamat: 'JL. Merdeka',
      price: '2000000',
      email: 'gedung@gmail.com',
      nomorTelepon: '0982873898939',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleOpenModal = (data = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleSaveGedung = (newData) => {
    if (editData) {
      setGedung(gedung.map(item => item.id === editData.id ? { ...item, ...newData } : item));
    } else {
      setGedung([...gedung, { id: gedung.length + 1, ...newData }]);
    }
    handleCloseModal();
  };

  const formFieldsGedung = [
    { name: 'kategori', label: 'Kategori', type: 'text', required: true },
    { name: 'gambar', label: 'Gambar', type: 'file', required: true },
    { name: 'nama', label: 'Nama Gedung', type: 'text', required: true },
    { name: 'namaMitra', label: 'Nama Mitra', type: 'text', required: true },
    { name: 'deskripsiGedung', label: 'Deskripsi Gedung', type: 'textarea', required: true },
    { name: 'alamat', label: 'Alamat', type: 'text', required: true },
    { name: 'price', label: 'Harga', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'nomorTelepon', label: 'Nomor Telepon', type: 'tel', required: true },
  ];

  const handleShowInfo = (id) => {
    navigate(`/gedung-info/${id}`);
  };

  // Logika pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gedung.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(gedung.length / itemsPerPage);

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
              <th className="py-2 px-4 border-b border-gray-200">Kategori</th>
              <th className="py-2 px-4 border-b border-gray-200">Gambar</th>
              <th className="py-2 px-4 border-b border-gray-200">Nama</th>
              <th className="py-2 px-4 border-b border-gray-200">Nama Mitra</th>
              <th className="py-2 px-4 border-b border-gray-200">Deskripsi Gedung</th>
              <th className="py-2 px-4 border-b border-gray-200">Alamat</th>
              <th className="py-2 px-4 border-b border-gray-200">Harga</th>
              <th className="py-2 px-4 border-b border-gray-200">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr className="text-center" key={item.id}>
                <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.kategori}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <img src={item.gambar} alt={item.nama} className="h-10 w-10 object-cover" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{item.nama}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.namaMitra}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.deskripsiGedung}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.alamat}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.price}</td>
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
        onSubmit={handleSaveGedung}
        formFields={formFieldsGedung}
        title={editData ? "Edit Gedung" : "Tambah Gedung"}
        initialData={editData}
      />
    </div>
  );
}

export default TableGedung;
