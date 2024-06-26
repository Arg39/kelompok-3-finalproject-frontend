import React, { useState, useEffect } from "react";
import Modal from "../../components/modal/modal";
import SidebarOwner from "../../components/sidebar/sidebarOwner";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBuildingUser,
  storeBuilding,
} from "../../redux/slices/buildingSlice";
import { selectToken } from "../../redux/slices/authSlice";
import { fetchProvinces } from "../../redux/slices/regionSlice";

export default function OwnerGedung() {
  document.body.style.backgroundColor = "#ffffff";
  const dispatch = useDispatch();
  const buildingData = useSelector((state) => state.building.buildingData);
  const isLoading = useSelector((state) => state.building.isLoading);
  const token = useSelector(selectToken);
  const userId = useSelector((state) => state.auth.user.id);
  const provinceData = useSelector((state) => state.building.provinceData); // State for province data

  useEffect(() => {
    if (userId) {
      dispatch(fetchBuildingUser(userId));
    }
    dispatch(fetchProvinces());
  }, [dispatch, userId]);

  const modalAdd = [
    { title: "Name", type: "text", description: "Masukkan nama gedung" },
    { title: "Address", type: "text", description: "Masukkan alamat gedung" },
    {
      title: "Regency",
      type: "text",
      description: "Masukkan kabupaten/kota gedung",
    },
    {
      title: "Type",
      type: "select",
      options: [
        { label: "Villa", value: "villa" },
        { label: "Hotel", value: "hotel" },
        { label: "Apartment", value: "apartment" },
      ],
      description: "Pilih jenis gedung",
    },
    {
      title: "Description",
      type: "textarea",
      description: "Masukkan deskripsi gedung",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(modalAdd);
  const [modalTitle, setModalTitle] = useState("Tambah Data Promosi");
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    address: "",
    description: "",
    regency: "", // Changed to regency
  });

  const handleOpenModal = () => {
    setModalTitle("Tambah Data Gedung");
    setModalData(modalAdd);
    setShowModal(true);
  };

  const handleSaveData = () => {
    const dataToSend = {
      user_id: userId,
      name: formData.name,
      type: formData.type,
      address: formData.address,
      description: formData.description,
      regency: formData.regency,
    };

    dispatch(storeBuilding(dataToSend))
      .then(() => {
        // Refresh buildingData after successful save
        dispatch(fetchBuildingUser(userId));
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        // Handle error state or display error message
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex font-montserrat">
      <SidebarOwner page="gedung" />
      <div className="flex-1 ml-[300px] p-4 font-montserrat">
        {/* Title */}
        <h1 className="flex justify-center text-5xl mt-4 text-gray-800 font-black">
          Gedung
        </h1>

        {/* Check if buildingData is null */}
        {buildingData === null ? (
          <div className="w-full h-full mt-8 flex justify-center items-center">
            <button
              onClick={handleOpenModal}
              className="ml-4 px-4 py-2 bg-tertiary-500 hover:bg-tertiary-800 text-white rounded-xl"
            >
              Tambah Data Gedung
            </button>
          </div>
        ) : (
          <>
            {/* Display building data */}
            {buildingData.length === 0 ? (
              <div className="w-full h-full mt-8 flex justify-center items-center">
                <p>No building data available.</p>
              </div>
            ) : (
              buildingData.map((building) => (
                <div className="mt-8" key={building.id}>
                  <h4 className="text-xl font-bold">Informasi Gedung</h4>
                  <div className="mt-4 border p-4 rounded-lg">
                    <p className="text-xl text-gray-800">
                      Nama: {building.name} <br />
                      Type: {building.type} <br />
                      Address: {building.address} <br />
                      Description: {building.description} <br />
                      Regency: {building.regency.toLowerCase()}{" "}
                      {/* Adjusted regency field */}
                    </p>
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <button className="p-2 px-8 rounded-md bg-tertiary-700 text-primary-50">
                      Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )}

        <Modal
          show={showModal}
          handleClose={handleCloseModal}
          button={{
            clicked: handleSaveData,
            title: "Simpan Data",
          }}
          contentModal={modalData}
          title={modalTitle}
        />
      </div>
    </div>
  );
}
