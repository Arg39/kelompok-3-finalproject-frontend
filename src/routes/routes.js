import React from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "../pages/notfound";
import Tentang from "../pages/tentang";
import Beranda from "../pages/beranda";
import Sewa from "../pages/sewa";
import Pemesanan from "../pages/pemesanan";
import Testapi from "../pages/testapi";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/sewa" element={<Sewa />} />
      <Route path="/pemesanan" element={<Pemesanan />} />
      <Route path="/testapi" element={<Testapi />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
