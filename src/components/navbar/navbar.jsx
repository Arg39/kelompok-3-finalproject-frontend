import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const progress = scrollPosition / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // blur effect
  const blurStartScroll = 100;
  const blurMaxIntensity = 20;
  let blurIntensity;

  if (window.scrollY >= blurStartScroll) {
    blurIntensity = Math.min(
      blurMaxIntensity,
      (window.scrollY - blurStartScroll) / 10
    );
  } else {
    blurIntensity = 0;
  }

  const opacity = Math.min(0.5, scrollProgress * 0.5);

  return (
    <nav
      className={`w-full fixed top-0 z-50 ${
        opacity < 0.75 ? "bg-transparent" : "bg-white"
      }`}
      style={{ backdropFilter: `blur(${blurIntensity}px)` }}
    >
      <div className="p-4 px-8 flex justify-between">
        <div className="flex flex-row items-center">
          <img className="w-28" src="images/logo-invert.png" alt="Logo" />
          <div className="flex flex-col">
            <ul className="mt-2 ml-8 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="relative">
                <Link
                  to="/"
                  className={`text-primary-50 text-xl font-montserrat light uppercase underline-hover ${
                    props.page === "home" ? "active-page" : ""
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/tentang"
                  className={`text-primary-50 text-xl font-montserrat light uppercase underline-hover ${
                    props.page === "about" ? "active-page" : ""
                  }`}
                >
                  Tentang
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/sewa"
                  className={`text-primary-50 text-xl font-montserrat light uppercase underline-hover ${
                    props.page === "sewa" ? "active-page" : ""
                  }`}
                >
                  Sewa
                </Link>
              </li>
              {isLoggedIn && (
                <li className="relative">
                  <Link
                    to="/pemesanan"
                    className={`text-primary-50 text-xl font-montserrat light uppercase underline-hover ${
                      props.page === "pemesanan" ? "active-page" : ""
                    }`}
                  >
                    Pemesanan
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              className="p-2 px-4 bg-transparent border border-primary-50 text-primary-50 hover:bg-primary-50 hover:text-quaternary-900 rounded-full flex flex-row items-center"
              onClick={() => dispatch(logout())}
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p>Account</p>
            </button>
          ) : (
            <button
              className="p-2 px-4 bg-transparent border border-primary-50 text-primary-50 hover:bg-primary-50 hover:text-quaternary-900 rounded-full flex flex-row items-center"
              onClick={() => dispatch(login())}
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p>Sign in</p>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
