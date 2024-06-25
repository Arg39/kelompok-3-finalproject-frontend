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
import ProtectedRoutes from "./protectedRoutes";
import AdminDashboard from "../pages/admin/dashboard";
import AdminInformasi from "../pages/admin/informasi";
import OwnerDashboard from "../pages/owner/dashboard";
import Kamar from "../pages/owner/kamar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/sewa" element={<Sewa />} />
      <Route path="/pemesanan" element={<Pemesanan />} />
      <Route path="/profil" element={<Profil />} />

      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/informasi" element={<AdminInformasi />} />
      </Route>
      <Route element={<ProtectedRoutes allowedRoles={["owner"]} />}>
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/kamar" element={<Kamar />} />
      </Route>

      <Route path="/testapi" element={<Testapi />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
