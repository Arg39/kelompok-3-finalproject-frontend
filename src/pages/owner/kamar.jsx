import React from 'react';
import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";

export default function Kamar() {
    document.body.style.backgroundColor = "#ffffff";
    const otherNav = [
        { title: "gedung", url: "/owner/gedung", pageUrl: "gedung" },
        { title: "kamar", url: "/owner/kamar", pageUrl: "kamar" },
    ];

    return (
        <div className="flex">
            <Sidebar
                dashboardUrl="/owner/dashboard"
                profilUrl="/owner/profile"
                otherNav={otherNav}
                page={"kamar"}
            />

            <div
            class="flex-1 ml-[320px] mt-5 mr-5 p-4 block rounded-lg bg-gray-500 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div
                class="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
                <h1 className="text-3xl font-bold text-black mt-4">DAFTAR KAMAR</h1>
            </div>
            <div class="p-6">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-black dark:bg-black dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nomor
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nama Kamar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Kapasitas
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Lantai
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Deskripsi
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1.
                                </th>
                                <td class="px-6 py-4">
                                    Kamar A
                                </td>
                                <td class="px-6 py-4">
                                    2 Orang
                                </td>
                                <td class="px-6 py-4">
                                    Rp 500.000
                                </td>
                                <td class="px-6 py-4">
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    Lorem Ipsum
                                </td>
                                <td>
                                    <Link
                                        to="/path/to/gambar-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Gambar
                                    </Link>
                                    <Link
                                        to="/path/to/fasilitas-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Fasilitas
                                    </Link>
                                    <button
                                        onClick={() => {
                                        // Call your delete API here
                                        }}
                                        type="button"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-secondary-600 dark:hover:text-white dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2.
                                </th>
                                <td class="px-6 py-4">
                                    Kamar B
                                </td>
                                <td class="px-6 py-4">
                                    4 Orang
                                </td>
                                <td class="px-6 py-4">
                                    Rp 1.000.000
                                </td>
                                <td class="px-6 py-4">
                                    2
                                </td>
                                <td class="px-6 py-4">
                                    Lorem Ipsum
                                </td>
                                <td>
                                    <Link
                                        to="/path/to/gambar-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Gambar
                                    </Link>
                                    <Link
                                        to="/path/to/fasilitas-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Fasilitas
                                    </Link>
                                    <button
                                        onClick={() => {
                                        // Call your delete API here
                                        }}
                                        type="button"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-secondary-600 dark:hover:text-white dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    3.
                                </th>
                                <td class="px-6 py-4">
                                    Kamar C
                                </td>
                                <td class="px-6 py-4">
                                    6 Orang
                                </td>
                                <td class="px-6 py-4">
                                    Rp 1.200.000
                                </td>
                                <td class="px-6 py-4">
                                    3
                                </td>
                                <td class="px-6 py-4">
                                    Lorem Ipsum
                                </td>
                                <td>
                                    <Link
                                        to="/path/to/gambar-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Gambar
                                    </Link>
                                    <Link
                                        to="/path/to/fasilitas-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Fasilitas
                                    </Link>
                                    <button
                                        onClick={() => {
                                        // Call your delete API here
                                        }}
                                        type="button"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-secondary-600 dark:hover:text-white dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    4.
                                </th>
                                <td class="px-6 py-4">
                                    Kamar D
                                </td>
                                <td class="px-6 py-4">
                                    8 Orang
                                </td>
                                <td class="px-6 py-4">
                                    Rp 1.500.000
                                </td>
                                <td class="px-6 py-4">
                                    4
                                </td>
                                <td class="px-6 py-4">
                                    Lorem Ipsum
                                </td>
                                <td>
                                    <Link
                                        to="/path/to/gambar-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Gambar
                                    </Link>
                                    <Link
                                        to="/path/to/fasilitas-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Fasilitas
                                    </Link>
                                    <button
                                        onClick={() => {
                                        // Call your delete API here
                                        }}
                                        type="button"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-secondary-600 dark:hover:text-white dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    5.
                                </th>
                                <td class="px-6 py-4">
                                    Kamar E
                                </td>
                                <td class="px-6 py-4">
                                    8 Orang
                                </td>
                                <td class="px-6 py-4">
                                    Rp 1.650.000
                                </td>
                                <td class="px-6 py-4">
                                    4
                                </td>
                                <td class="px-6 py-4">
                                    Lorem Ipsum
                                </td>
                                <td>
                                    <Link
                                        to="/path/to/gambar-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Gambar
                                    </Link>
                                    <Link
                                        to="/path/to/fasilitas-kamar"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-white focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-white dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Fasilitas
                                    </Link>
                                    <button
                                        onClick={() => {
                                        // Call your delete API here
                                        }}
                                        type="button"
                                        className="inline-block rounded bg-black ml-1 px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none dark:text-secondary-600 dark:hover:text-white dark:focus:text-secondary-500 dark:active:text-secondary-500"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
                
                
        </div>
    );
}