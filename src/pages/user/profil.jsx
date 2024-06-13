import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

export default function Profil() {
  document.body.style.backgroundColor = "#080808";
  const url = "http://localhost:8000/";
  const users = useSelector((state) => state.auth.users);

  const [isEditable, setIsEditable] = useState(false);
  const [nama, setNama] = useState(users["name"]);
  const [email, setEmail] = useState(users["email"]);
  const [noTelp, setNoTelp] = useState(users["phone_number"]);
  const [jenisKelamin, setJenisKelamin] = useState(users["gender"]);
  const [tanggalLahir, setTanggalLahir] = useState(users["birthdate"]);
  const [alamat, setAlamat] = useState(users["address"]);
  const [deskripsi, setDeskripsi] = useState(users["description"]);
  const [foto, setFoto] = useState(users["photo"]);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = () => {
    console.log(nama);
  };

  return (
    <div>
      <div className="w-full h-full">
        <Navbar />
        <div className="mt-16">
          <div className="text-primary-50 flex flex-col items-center">
            <h1 className="mt-8 text-primary-50 text-4xl font-montserrat font-extrabold">
              Profil Anda
            </h1>

            <form action="" onSubmit={handleEditSubmit}>
              <div className="w-[800px] p-10 mt-20 bg-white bg-opacity-25 rounded-md">
                <div className="flex flex-row items-center">
                  <div className="relative w-40 h-40 mr-4">
                    <div
                      className="w-40 h-40 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          foto
                            ? foto
                            : url + "images/profil/default-profile.png"
                        })`,
                      }}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
                      {isEditable || foto ? null : (
                        <p className="font-montserrat text-sm text-center text-primary-800 px-2 py-1 mb-2 rounded-b-full">
                          Edit to change <br /> your photo
                        </p>
                      )}
                      {isEditable ? (
                        <label
                          htmlFor="file_input"
                          className="absolute text-quaternary-900 bg-secondary-300 rounded-full p-2 bottom-0 right-0 cursor-pointer"
                        >
                          <input
                            id="file_input"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5"
                          >
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                          </svg>
                        </label>
                      ) : null}
                    </div>
                  </div>

                  <div className="ml-4 w-full">
                    <div className="w-full">
                      <p className="">Nama Lengkap</p>
                      <input
                        className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                        type="text"
                        readOnly={!isEditable}
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>

                    <div className="w-full flex flex-row mt-4">
                      <div className="w-1/2">
                        <p className="">Jenis Kelamin</p>
                        <input
                          className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                          type="text"
                          readOnly={!isEditable}
                          value={jenisKelamin}
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2 ml-4">
                        <p className="">Tanggal Lahir</p>
                        <ReactDatePicker
                          className="w-[256px] p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                          selected={tanggalLahir}
                          onChange={(date) => setTanggalLahir(date)}
                          readOnly={!isEditable}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <p className="">Alamat</p>
                  <input
                    className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                    type="text"
                    readOnly={!isEditable}
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>

                <div className="w-full mt-4">
                  <p className="">Bio deskripsi</p>
                  <textarea
                    rows={4}
                    className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2"
                    readOnly={!isEditable}
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </div>

                <div className="w-full mt-4">
                  <p className="font-montserrat text-lg mb-2">Kontak</p>
                  <hr />
                </div>

                <div className="w-full flex flex-row mt-4">
                  <div className="w-1/2">
                    <p className="">Email</p>
                    <input
                      className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                      type="text"
                      readOnly={!isEditable}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 ml-10">
                    <p className="">No Hp</p>
                    <input
                      className="w-full p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                      type="text"
                      readOnly={!isEditable}
                      value={noTelp}
                      onChange={(e) => setNoTelp(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[800px]">
                <div className="mt-8 flex justify-end">
                  {isEditable ? (
                    <button
                      onClick={handleEditClick}
                      className="p-2 px-8 bg-primary-600 font-montserrat text-lg uppercase text-quaternary-900 rounded-md flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                      </svg>
                      Save
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="p-2 px-8 bg-primary-600 font-montserrat text-lg uppercase text-quaternary-900 rounded-md flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 mr-2"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
