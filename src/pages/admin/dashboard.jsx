import React from "react";
import Sidebar from "../../components/sidebar/sidebar";

export default function AdminDashboard() {
  document.body.style.backgroundColor = "#ffffff";
  const otherNav = [
    { title: "informasi", url: "/admin/informasi", pageUrl: "informasi" },
    { title: "data", url: "/admin/data", pageUrl: "data" },
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
        <h1 className="text-2xl font-semibold text-gray-800">Main Content</h1>
        <p>Your main content goes here.</p>
        <h1 className="text-2xl font-semibold text-gray-800">Main Content</h1>
        <p>Your main content goes here.</p>
        <h1 className="text-2xl font-semibold text-gray-800">Main Content</h1>
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
}
