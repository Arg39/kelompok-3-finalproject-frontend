import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

export default function OwnerDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "gedung", url: "/owner/gedung", pageUrl: "gedung" },
    { title: "kamar", url: "/owner/kamar", pageUrl: "kamar" },
  ];

  const statistik = [
    { label: "Total Gedung", value: 2 },
    { label: "Total Kamar", value: 100 },
    { label: "Kamar Terisi", value: 66 },
    { label: "Kamar Tersedia", value: 34 },
  ];

  const aktivitasTerbaru = [
    "Kamar 101 baru saja disewa oleh Azizi",
    "Kamar 202 baru saja checkout",
    "Kamar 303 baru saja disewa oleh Alfian",
    "Kamar 404 baru saja checkout",
  ];

  return (
    <div className="flex">
      <Sidebar
        dashboardUrl="/owner/dashboard"
        profilUrl="/owner/profile"
        otherNav={otherNav}
        page={"dashboard"}
      />
      <div className="flex-1 ml-[300px] p-4">
        <div
          class="block rounded-lg bg-gray-500 text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div
            class="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
            <h1 className="text-3xl font-bold text-black mb-4 pt-5">
            Ringkasan Status
          </h1>
          </div>
          <div class="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {statistik.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black shadow p-4 rounded-lg flex flex-col items-center"
                >
                  <h2 className="text-xl font-bold text-white">{stat.value}</h2>
                  <p className="text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            class="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
            <div className="bg-black shadow p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">
                Aktivitas Terbaru
              </h2>
              <ul className="list-disc list-inside text-white">
                {aktivitasTerbaru.map((aktivitas, index) => (
                  <li key={index}>{aktivitas}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
