import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

export default function OwnerDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "gedung", url: "/owner/gedung", pageUrl: "gedung" },
    { title: "kamar", url: "/owner/kamar", pageUrl: "kamar" },
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
        <h1 className="text-2xl font-semibold text-gray-800">
          Ini bagian owner dashboard
        </h1>
      </div>
    </div>
  );
}