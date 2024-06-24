import React from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../../redux/api/baseUrl";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Sidebar({ dashboardUrl, profilUrl, otherNav, page }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <aside className="bg-primary-50 fixed top-0 left-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 flex flex-col justify-between">
    <div className="flex justify-center items-center p-4 flex-col">
      <img
        className="invert"
        src={baseUrl + "images/logo.png"}
        alt="Logo RENTID"
        width={200}
      />
      <Link
        to={dashboardUrl}
        className={`w-full mt-4 font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 group cursor-pointer ${
          page === "dashboard" ? "bg-black text-white" : "text-gray-900"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <span className="ml-4">Dashboard</span>
      </Link>

      {otherNav.map((nav, index) => (
        <Link
          key={index}
          to={nav.url}
          className={`w-full mt-4 font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 group cursor-pointer ${
            page === nav.pageUrl ? "bg-black text-white" : "text-gray-900"
          }`}
        >
          
          {nav.pageUrl === "dataowner" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M4.5 3.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm4.5 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3A.75.75 0 0 1 9 6.75v-3Zm5.25-.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm-9 6a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm4.5 0a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm5.25.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm-9 6a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm4.5 0a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3Zm5.25.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Z" />
            </svg>
          ) : nav.pageUrl === "datauser" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25ZM8.25 7.5h-3v3h3v-3Zm7.5 0h-3v3h3v-3Zm1.5 3h3v-3h-3v3Zm-1.5 1.5h-3v3h3v-3Zm-7.5 3h-3v3h3v-3Zm1.5 0v3h3v-3h-3Zm-1.5-1.5v-3h-3v3h3ZM8.25 7.5v3h3v-3h-3Zm-4.5 4.5h3v3h-3v-3Zm7.5 0h3v3h-3v-3Zm-1.5 3h-3v3h3v-3Zm-4.5 0h3v3h-3v-3Zm4.5-4.5h3v3h-3v-3Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5Zm.75 7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h15.75Zm0-7.5h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM3.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm6.75 1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM9 14.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" />
            </svg>
          )}
          <span className="ml-4">{nav.title}</span>
        </Link>
      ))}
    </div>
    <div>
      <Link
        to={profilUrl}
        className={`w-full mt-4 font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 group cursor-pointer ${
          page === "profil" ? "bg-black text-white" : "text-gray-900"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 13.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm-7.5 6a8.25 8.25 0 1 1 15 0 .75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-4">Profil</span>
      </Link>
      <button
        onClick={handleLogout}
        className="w-full mt-4 font-medium text-sm items-center rounded-lg px-4 py-2.5 flex transition-all duration-200 group cursor-pointer text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M5.78 6.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-4">Logout</span>
      </button>
    </div>
  </aside>
  );
}
