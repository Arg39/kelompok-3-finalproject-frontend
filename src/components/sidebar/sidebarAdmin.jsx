import React from "react";
import Sidebar from "./sidebar";

export default function SidebarAdmin(props) {
  const otherNav = [
    { title: "promosi", url: "/admin/promosi", pageUrl: "promosi" },
    { title: "data owner", url: "/admin/data-owner", pageUrl: "data owner" },
    { title: "data user", url: "/admin/data-user", pageUrl: "data user" },
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
