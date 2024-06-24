import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrashAlt} from "react-icons/fa";
import { useState } from "react";

export default function AdminInformasi() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "Informasi", url: "/admin/informasi", pageUrl: "informasi" },
    { title: "Data Owner", url: "/admin/dataowner", pageUrl: "dataowner" },
    { title: "Data User", url: "/admin/datauser", pageUrl: "datauser" },
  ];

  const [owners, setOwners] = useState([
    {
      id: 1,
      namaMitra: "Afif",
      alamat: "Jl. Kebon Jeruk No. 1",
      email: "afif@example.com",
      nomorTelepon: "08123456789",
    },
    {
      id: 2,
      namaMitra: "Budi",
      alamat: "Jl. Mangga Dua No. 2",
      email: "budi@example.com",
      nomorTelepon: "08198765432",
    },
    {
      id: 3,
      namaMitra: "Citra",
      alamat: "Jl. Kenari No. 3",
      email: "citra@example.com",
      nomorTelepon: "08134567890",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = owners.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(owners.length / itemsPerPage);

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
    navigate(`/admin/dataowner/${id}`);
  };


  return (
    <div className="flex">
      <Sidebar
        dashboardUrl="/admin/dashboard"
        profilUrl="/admin/profile"
        otherNav={otherNav}
        page={"dataowner"}
      />
      <div className="flex-1 ml-[300px] p-4">
        <h1 className="text-2xl font-semibold text-gray-800 pb-16">Data Owner</h1>
        <div className="container mx-auto p-4">
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">ID</th>
                  <th className="py-2 px-4 border-b border-gray-200">Nama</th>
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
                        <FaEye
                          className="text-gray-500 cursor-pointer"
                          onClick={() => handleShowInfo(item.id)}
                        />
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
              className={`py-2 px-4 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`py-2 px-4 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
