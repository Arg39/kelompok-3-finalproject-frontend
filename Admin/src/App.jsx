import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import MitraInfoPage from '@/component/Mitra/InfoMitra';
import GedungInfoPage from '@/component/Gedung/InfoGedung';
import Profile from '@/pages/dashboard/Profile';
import Tables from '@/pages/dashboard/tablesmitra';
import InfoTransaksi from "./component/Transaksi/InfoTransaksi";

function App() {
  const mitraData = [
    {
      id: 1,
      namaMitra: 'PT. Hotel Indonesia',
      alamat: 'JL. Kenari',
      email: 'hotel@gmail.com',
      nomorTelepon: '0982873898938',
    },
  ];

  const gedungData = [
    {
      id: 1,
      kategori: 'Hotel',
      gambar: 'https://example.com/gambar-hotel.jpg',
      nama: 'Hotel Indonesia',
      namaMitra: 'PT. Hotel Indonesia',
      deskripsiGedung: 'Hotel mewah di pusat kota.',
      alamat: 'JL. Kenari',
      price: '1500000',
      email: 'hotel@gmail.com',
      nomorTelepon: '0982873898938',
    },
  ];

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path="home" element={<Tables />} />
        <Route path="daftar/gedung" element={<Profile />} />
        <Route path="daftar/mitra" element={<Tables />} />
        <Route path="rent" element={<Tables />} />
      </Route>
      <Route path="/mitra-info/:id" element={<MitraInfoPage data={mitraData} />} />
      <Route path="/gedung-info/:id" element={<GedungInfoPage data={gedungData} />} />
      <Route path="/transaksi-info/:id" element={<InfoTransaksi />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
