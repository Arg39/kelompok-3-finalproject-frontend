import React from 'react'
import Chatbot from '../components/chatbot/chatbot'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function Beranda() {
  document.body.style.backgroundColor = "#080808"
  return (
    <div className='w-full h-full'>
      <Navbar page="home" />
      <Chatbot/>
      <div className=''>
        <div className='flex justify-between w-full'>
          <div className='w-[800px] h-[700px] pt-20'>
            <div className='pt-16 pl-20'>
              <div className='mb-10'>
                <p className='text-primary-50 font-montserrat font-extrabold text-6xl leading-[60px] tracking-wide mb-8'>
                  Solusi Penyewaan Tempat Untuk Anda
                </p>
                <p className='text-primary-50 font-montserrat font-thin text-2xl pr-20'>
                Mari bergabung dengan Rent Id dan temukan solusi penyewaan tempat yang sesuai dengan kebutuhan dan anggaran Anda. Jelajahi website kami sekarang dan temukan properti impian Anda dengan mudah dan cepat.
                </p>
              </div>
              <button className='p-4 px-8 rounded-full bg-primary-50 flex flex-row items-center'>
                <span className='mr-4 text-2xl uppercase'>Mulai cari tempat</span>
                <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div >
            <img  className='w-[700px] h-[700px] flex shrink-0 object-cover object-center-top' src="images/home/rent.jpg" alt="" />
          </div>
        </div>
        <div className='w-auto h-[900px] bg-tertiary-100'>
          <h1 className='flex items-center justify-center mb-24 pt-8 text-6xl font-montserrat font-bold text-tertiary-800'>Kelebihan Menggunakan Rent id</h1>
          <div className="flex justify-center">
            <div className="grid grid-flow-col gap-14">
              <div className="relative w-[400px] h-[512px] overflow-hidden">
                <img className="w-full h-full object-cover hero-image" src="images/home/property.jpg" alt="Properti" /> 
                <p className="absolute bottom-0 w-full text-center text-tertiary-700 font-montserrat font-semibold text-2xl p-2 px-4 mb-8">
                  Pilihan Properti Yang Beragam
                </p>
              </div>
              <div className="relative w-[400px] h-[512px] overflow-hidden mt-20">
                <img className="w-full h-full object-cover hero-image" src="images/home/money.jpg" alt="Properti" /> 
                <p className="absolute bottom-0 w-full text-center text-tertiary-700 font-montserrat font-semibold text-2xl p-2 mb-8">
                  Harga Terbaik
                </p>
              </div>
              <div className="relative w-[400px] h-[512px] overflow-hidden">
                <img className="w-full h-full object-cover hero-image" src="images/home/transaction.jpg" alt="Properti" /> 
                <p className="absolute bottom-0 w-full text-center text-tertiary-700 font-montserrat font-semibold text-2xl p-2 px-4 mb-8">
                  Transaksi aman dan terpercaya
                </p>
              </div>
            </div>
          </div>
          <div class="mb-4">
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}