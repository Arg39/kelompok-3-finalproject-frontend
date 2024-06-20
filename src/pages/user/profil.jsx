import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateUserData } from "../../redux/slices/authSlice";

export default function Profil() {
  document.body.style.backgroundColor = "#080808";
  const url = "http://localhost:8000/";
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);
  const [nama, setNama] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [noTelp, setNoTelp] = useState(user.phone_number);
  const [jenisKelamin, setJenisKelamin] = useState(user.gender);
  // const [tanggalLahir, setTanggalLahir] = useState(new Date(user.birthdate));
  const [alamat, setAlamat] = useState(user.address);
  const [deskripsi, setDeskripsi] = useState(user.description);
  const [foto, setFoto] = useState(user.photo);

  const handleEditClick = (event) => {
    event.preventDefault();
    setIsEditable(!isEditable);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFoto(file);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", nama);
    formData.append("email", email);
    formData.append("phone_number", noTelp);
    formData.append("gender", jenisKelamin);
    // formData.append("birthdate", tanggalLahir.toISOString().split("T")[0]);
    formData.append("address", alamat);
    formData.append("description", deskripsi);
    if (foto && foto !== user.photo) {
      formData.append("photo", foto);
    }

    try {
      await dispatch(
        updateUserData({
          id: user.id,
          name: nama,
          email: email,
          phone_number: noTelp,
          gender: jenisKelamin,
          // birthdate: tanggalLahir,
          address: alamat,
          description: deskripsi,
          photo: foto,
        })
      );
      setIsEditable(false); // Switch back to non-editable mode on success
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
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

            <form onSubmit={handleEditSubmit}>
              <div className="w-[800px] p-10 mt-20 bg-white bg-opacity-25 rounded-md">
                <div className="flex flex-row items-center">
                  <div className="relative w-40 h-40 mr-4">
                    <div
                      className="w-40 h-40 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          foto
                            ? URL.createObjectURL(foto)
                            : url + "images/profil/default-profile.png"
                        })`,
                      }}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
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
                      {/* <div className="w-1/2 ml-4">
                        <p className="">Tanggal Lahir</p>
                        <ReactDatePicker
                          className="w-[256px] p-2 text-quaternary-900 text-start rounded-md mt-2 focus:border-hidden"
                          selected={tanggalLahir}
                          onChange={(date) => setTanggalLahir(date)}
                          readOnly={!isEditable}
                        />
                      </div> */}
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
                      type="submit"
                      className="p-2 px-8 bg-primary-600 font-montserrat text-lg uppercase text-quaternary-900 rounded-md flex items-center"
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleEditClick}
                      className="p-2 px-8 bg-primary-600 font-montserrat text-lg uppercase text-quaternary-900 rounded-md flex items-center"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
