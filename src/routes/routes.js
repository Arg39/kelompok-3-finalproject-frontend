import React from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "../pages/user/notfound";
import Tentang from "../pages/user/tentang";
import Beranda from "../pages/user/beranda";
import Sewa from "../pages/user/sewa";
import Pemesanan from "../pages/user/pemesanan";
import Testapi from "../pages/testapi";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profil from "../pages/user/profil";
import ProtectedRoute from "./protectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/sewa" element={<Sewa />} />
      <Route path="/pemesanan" element={<Pemesanan />} />
      <Route
        path="/profil"
        element={
          <ProtectedRoute allowedRoles={("user", "admin")}>
            <Profil />
          </ProtectedRoute>
        }
      />
      <Route path="/testapi" element={<Testapi />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
