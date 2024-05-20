import logo from "../assets/LOGO RENTID.png";
import imgLogin from "../assets/imglogin.png"
import React, {useState} from "react";
import {Link, useNavigate } from "react-router-dom";


export default function Login() {
     // define state show password
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();
  return (
    <section>
     <div className="bg-black w-screen h-screen flex items-center justify-center">
  <div className="md:w-1/3 ">
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <img
        src={logo}
        width={75}
        alt="Gambar"
        className="md:absolute md:top-0 md:left-7 md:m-4 md:w-10"

      />
    </div>
    <h1 className="font-bold text-2xl text-start text-white font-serif ml-10 mt-4">Welcome Back to RENT ID</h1>
    <p className="font-medium text-white text-lg text-start ml-10">Sign into your account</p>
    <form className="flex flex-col gap-2 justify-center mx-10 my-4">
      <label
        htmlFor="email"
        className="text-sm text-white"
      >
        Email
      </label>
      <input
        className="p-2 rounded-lg text-white bg-black border-2 border-white focus:outline-none focus:ring-1 focus:ring-white"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />

      <div className="relative">
        <div className="mb-2">
          <label
            htmlFor="password"
            className="text-sm text-white"
          >
            Password
          </label>
        </div>
        <input
          className="p-2 rounded-lg text-white bg-black border-2 border-white focus:outline-none focus:ring-1 focus:ring-white w-full"
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <svg
          id="toggle-password"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-eye-fill absolute top-2/3 right-3 -translate-y-1/2 cursor-pointer"
          viewBox="0 0 16 16"
           onClick={() => setShowPassword(!showPassword)}
        >
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      </div>

      <a
        href="#"
        className="text-sm text-white ml-auto"
      >
        Forget Password?
      </a>

      <button
      onClick={()=> navigate ('/Home')}
        type="submit"
        className="rounded-lg bg-white p-2 text-black text-lg font-semibold mt-5 md:p-2 md:text-base"
      >
        Sign In
      </button>
      <p className="pt-16 text-center text-white pb-5">
        Don’t have an account?{" "}
        <Link to='/register'
          href="#"
          className="text-white font-bold"
        >
          Sign Up
        </Link>
      </p>
    </form>
  </div>
  <div className="md:w-2/3 h-screen relative">
    <img src={imgLogin} alt="" className="md:w-full md:h-full md:block hidden object-cover" />
  </div>
</div>

    </section>
  );
}
