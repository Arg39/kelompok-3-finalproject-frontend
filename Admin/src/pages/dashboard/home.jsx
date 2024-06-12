import React from "react";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Chart from '@/component/Chart';
import PieChart from '@/component/chartPie';

export function Home() {
  const rentalData = [
    { month: 'Januari', count: 5 },
    { month: 'Februari', count: 10 },
    { month: 'Maret', count: 7 },
    { month: 'April', count: 8 },
    { month: 'Mei', count: 6 },
    { month: 'Juni', count: 12 },
    { month: 'Juli', count: 15 },
    { month: 'Agustus', count: 11 },
    { month: 'September', count: 9 },
    { month: 'Oktober', count: 13 },
    { month: 'November', count: 14 },
    { month: 'Desember', count: 96 },
  ];

  const data = [
    { month: 'January', count: 30 },
    { month: 'February', count: 20 },
    { month: 'March', count: 50 },
  ];

  return (
    <div className="p-6">
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
      {/* Chart */}
      <div className="my-10 flex items-center justify-start">
        <h1 className="text-black text-2xl font-semibold">Statistik Penyewaan</h1>
      </div>
      <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
        <div style={{ width: '50%', height: '400px' }}>
          <Chart data={rentalData} />
        </div>
        <div style={{ width: '50%', height: '400px' }}>
          <PieChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;