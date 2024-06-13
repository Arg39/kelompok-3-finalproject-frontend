import React from "react";
import Navbar from "../../components/navbar/navbar";
import Chatbot from "../../components/chatbot/chatbot";
import Footer from "../../components/footer/footer";

export default function Tentang() {
  document.body.style.backgroundColor = "#080808";
  return (
    <div className="w-full h-full">
      <Navbar page="about" />
      <Chatbot />
      <div className="px-32 pt-32 pb-16">
        <div className="flex justify-center">
          <h1 className="text-6xl font-montserrat font-bold uppercase text-primary-50">
            Tentang Kami
          </h1>
        </div>
        <div className="flex justify-center mt-20 ">
          <div className="flex flex-row">
            <img className="w-auto h-60" src="images/logo-2.png" alt="" />
            <div>
              <p className="ml-10 text-primary-50 font-normal text-xl">
                Rent ID adalah platform penyewaan tempat yang menyediakan
                pengalaman yang mudah dan efisien bagi pengguna yang ingin
                mencari, membandingkan, dan memesan tempat dengan aman. Dengan
                beragam pilihan tempat yang tersedia, pengguna dapat dengan
                cepat menemukan lokasi yang sesuai dengan kebutuhan mereka. Rent
                ID menawarkan informasi lengkap tentang fasilitas, lokasi, dan
                harga, serta layanan pelanggan yang responsif, menjadikannya
                pilihan utama bagi siapa saja yang mencari tempat untuk berlibur
                atau acara lainnya.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-montserrat font-bold uppercase text-primary-50 mb-4">
            Visi
          </h2>
          <p className="text-primary-50 font-normal text-lg">
            Menjadi platform terkemuka dalam industri penyewaan tempat yang
            memberikan kemudahan, transparansi, dan kepuasan bagi setiap
            pengguna dalam menyelenggarakan berbagai jenis acara.
          </p>
          <h2 className="text-3xl font-montserrat font-bold uppercase text-primary-50 mt-8 mb-4">
            Misi
          </h2>
          <p className="text-primary-50 font-normal text-lg">
            Menyediakan platform yang inovatif dan user-friendly untuk mencari,
            membandingkan, dan memesan tempat dengan berbagai fasilitas dan
            harga yang kompetitif. Kami berkomitmen untuk memberikan layanan
            pelanggan yang unggul dan responsif untuk menjawab setiap kebutuhan
            dan pertanyaan pengguna.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
