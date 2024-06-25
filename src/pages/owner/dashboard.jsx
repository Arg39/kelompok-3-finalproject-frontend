import React from "react";
import SidebarOwner from "../../components/sidebar/sidebarOwner";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function OwnerDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const pendaftar = [
    { id: 1, created_at: "2024-06-13 17:47:09" },
    { id: 1, created_at: "2024-06-13 17:47:09" },
    { id: 1, created_at: "2024-06-13 17:47:09" },
    { id: 2, created_at: "2022-04-10 17:47:09" },
    { id: 2, created_at: "2022-04-10 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
    { id: 3, created_at: "2022-02-13 17:47:09" },
  ];

  const totalUsers = pendaftar.length;

  // Extract dates and count occurrences
  const dateCounts = pendaftar.reduce((acc, p) => {
    const date = p.created_at.split(" ")[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(dateCounts);
  const data = Object.values(dateCounts);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Pendaftaran",
        data,
        fill: true,
        backgroundColor: "rgba(255, 255, 255)",
        borderColor: "rgba(255, 255, 255)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleColor: "rgba(255, 255, 255)",
        bodyColor: "rgba(255, 255, 255)",
        backgroundColor: "rgba(255, 255, 255)",
        borderColor: "rgba(255, 255, 255)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255)",
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255)",
        },
      },
    },
  };

  return (
    <div className="flex">
      <SidebarOwner page="dashboard" />
      <div className="flex-1 ml-[300px] p-4 font-montserrat">
        {/* Title */}
        <h1 className="flex justify-center text-5xl mt-4 text-gray-800 font-black">
          Dashboard
        </h1>

        {/* contents */}
        <div className="p-2 mt-4 ">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-[#0C1844] text-white rounded-lg">
              <p className="font-semibold text-xl ">
                <span className="text-7xl">{/* data promosi */}</span> Total
                Kamar
              </p>
            </div>
            <div className="p-4 bg-[#C80036] text-white rounded-lg">
              <p className="font-semibold text-xl">
                <span className="text-7xl">{/* data roel owner */}</span> Kamar
                Terisi
              </p>
            </div>
            <div className="p-4 bg-[#FFF5E1] text-black rounded-lg">
              <p className="font-semibold text-xl">
                <span className="text-7xl">{totalUsers}</span> Kamar Tersedia
              </p>
            </div>
          </div>

          <div className="mt-4 p-2 bg-tertiary-600 text-white rounded-lg  flex flex-col justify-center">
            <p className="px-2 mb-4 font-semibold text-2xl flex justify-center">
              Penghuni
            </p>
            <Line
              className="max-h-96 max-w-6xl"
              data={chartData}
              options={chartOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
