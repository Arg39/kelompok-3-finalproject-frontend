import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

export default function AdminDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "Informasi", url: "/admin/informasi", pageUrl: "informasi" },
    { title: "Data Owner", url: "/admin/dataowner", pageUrl: "dataowner" },
    { title: "Data User", url: "/admin/datauser", pageUrl: "datauser" },
  ];

  return (
    <div className="flex">
      <Sidebar
        dashboardUrl="/admin/dashboard"
        profilUrl="/admin/profile"
        otherNav={otherNav}
        page={"dashboard"}
      />
      <div className="flex-1 ml-[300px] p-4">
        <h1 className="text-2xl font-semibold text-gray-800 pb-16">Dashboard</h1>
        <div className="mb-10 p-6 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
            <h1 className="text-black text-2xl font-semibold">Selamat datang di RENTID</h1>
          </div>

          <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-6 bg-blue-500 rounded-lg shadow-md flex items-center">
              <div className="mr-4">
                <FaUsers className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">Jumlah Mitra</h4>
                <p className="text-white text-2xl">50</p>
              </div>
            </div>
            <div className="p-6 bg-green-500 rounded-lg shadow-md flex items-center">
              <div className="mr-4">
                <FaBuilding className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">Jumlah Gedung</h4>
                <p className="text-white text-2xl">300</p>
              </div>
            </div>
            <div className="p-6 bg-red-500 rounded-lg shadow-md flex items-center">
              <div className="mr-4">
                <GrTransaction className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">Jumlah Transaksi</h4>
                <p className="text-white text-2xl">1300</p>
              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
}
