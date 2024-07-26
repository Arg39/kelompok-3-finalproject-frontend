import React from "react";
import Sidebar from "./sidebar";

export default function SidebarAdmin(props) {
  const otherNav = [
    { title: "promosi", url: "/admin/promosi", pageUrl: "promosi" },
  ];
  return (
    <div>
      <Sidebar
        dashboardUrl="/admin/dashboard"
        profilUrl="/admin/profile"
        otherNav={otherNav}
        page={props.page}
      />
    </div>
  );
}
