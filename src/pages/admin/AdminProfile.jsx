import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import baseUrl from "../../redux/api/baseUrl";
import { useSelector } from "react-redux";

const AdminProfile = () => {
  const admin = useSelector((state) => state.auth.user);
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
        page="profil"
      />
      <div className="flex-1 ml-[300px] p-4">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label htmlFor="username" className="text-gray-600 block mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={admin.username}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="email" className="text-gray-600 block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={admin.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="fullname" className="text-gray-600 block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={admin.fullname}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="profilePicture"
                className="text-gray-600 block mb-2"
              >
                Profile Picture
              </label>
              <img
                src={baseUrl + admin.profilePicture}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
