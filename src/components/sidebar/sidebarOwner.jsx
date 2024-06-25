import React from "react";
import Sidebar from "./sidebar";

export default function SidebarOwner(props) {
  const otherNav = [
    { title: "gedung", url: "/owner/gedung", pageUrl: "gedung" },
    { title: "kamar", url: "/owner/kamar", pageUrl: "kamar" },
  ];
  return (
    <div>
      <Sidebar
        dashboardUrl="/owner/dashboard"
        profilUrl="/owner/profile"
        otherNav={otherNav}
        page={props.page}
      />
    </div>
  );
}
