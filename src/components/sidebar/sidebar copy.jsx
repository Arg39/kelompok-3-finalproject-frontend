import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-quaternary-900 lg:flex md:w-64 md:flex-col hidden h-screen">
      <div className="flex-col pt-5 flex overflow-y-auto h-full">
        <div className="h-full flex-col justify-between px-4 flex space-y-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <Link
                to={"/admin/dashboard"}
                className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Dashboard</span>
              </Link>
            </div>
            <div>
              <p className="px-4 mt-8 font-semibold text-xs tracking-widest text-primary-50">
                Contact
              </p>
              <div className="mt-4 space-y-1">
                <Link
                  to={"/admin/informasi"}
                  className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>Forms</span>
                  <span className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-gray-500 text-white rounded-full uppercase border border-transparent inline-flex">
                    15
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pb-4">
            <div className="space-y-1">
              <Link
                to={"/admin/dashboard"}
                className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </Link>
              <button className="w-full font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                <svg
                  className="mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                />
                <path
                  d="M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z"
                  fill="4F4F4F"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
