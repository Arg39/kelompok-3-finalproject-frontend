import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPromosi,
  addPromosi,
  editPromosi,
  deletePromosi,
} from "../../redux/slices/promosiSlice";
import Modal from "../../components/modal/modal";
import Table from "../../components/table/table";
import SidebarOwner from "../../components/sidebar/sidebarOwner";

export default function OwnerKamar() {
  document.body.style.backgroundColor = "#ffffff";
  const dispatch = useDispatch();
  const { promosiData, isLoading } = useSelector((state) => state.promosi);
  const modalAdd = [
    { title: "Nama Promosi", type: "text" },
    { title: "Gambar", type: "file", accept: ".jpg,.jpeg,.png,.gif" },
  ];

  useEffect(() => {
    dispatch(fetchPromosi());
  }, [dispatch]);

  useEffect(() => {
    const dataWithIndex =
      promosiData?.map((item, index) => ({
        ...item,
        index: index + 1,
      })) || [];
    setRecords(dataWithIndex);
  }, [promosiData]);

  const dataColumns = [
    {
      name: "No",
      selector: "index",
      sortable: true,
      maxWidth: "20px",
      cell: (row) => (
        <span className="text-center text-base font-medium">{row.index}</span>
      ),
    },
    {
      name: "Nama Kamar",
      selector: "title",
      cell: (row) => <span className="text-center text-base">{row.title}</span>,
      maxWidth: "14rem",
      sortable: true,
    },
    {
      name: "Kapasitas",
      selector: "image",
      cell: (row) => (
        <img src={row.image} alt={row.title} className="h-16 w-auto" />
      ),
      maxWidth: "full",
    },
    {
      name: "deskripsi",
      selector: "image",
      cell: (row) => (
        <img src={row.image} alt={row.title} className="h-16 w-auto" />
      ),
      maxWidth: "full",
    },
    {
      name: "price",
      selector: "image",
      cell: (row) => (
        <img src={row.image} alt={row.title} className="h-16 w-auto" />
      ),
      maxWidth: "full",
    },
    {
      name: "lantai",
      selector: "image",
      cell: (row) => (
        <img src={row.image} alt={row.title} className="h-16 w-auto" />
      ),
      maxWidth: "full",
    },
    {
      name: "status",
      selector: "image",
      cell: (row) => (
        <img src={row.image} alt={row.title} className="h-16 w-auto" />
      ),
      maxWidth: "full",
    },
    {
      name: "Aksi",
      type: "actions",
      actions: [
        {
          label: "Edit",
          className: "bg-blue-600 hover:bg-blue-700 text-white",
          onClick: (id) => handleEdit(id),
        },
        {
          label: "Delete",
          className: "bg-red-600 hover:bg-red-700 text-white",
          onClick: (id) => handleDelete(id), // Call handleDelete with id
        },
      ],
      maxWidth: "16rem",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(modalAdd);
  const [modalTitle, setModalTitle] = useState("Tambah Data Promosi");
  const [currentId, setCurrentId] = useState(null);
  const [records, setRecords] = useState([]);

  const handleOpenModal = () => {
    setModalTitle("Tambah Data Promosi");
    setModalData(modalAdd);
    setCurrentId(null);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    const promosi = promosiData.find((item) => item.id === id);
    setModalTitle("Edit Data Promosi");
    setModalData([
      { title: "Nama Promosi", type: "text", value: promosi.title },
      { title: "Gambar", type: "file", accept: ".jpg,.jpeg,.png" },
    ]);
    setCurrentId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (id) => {
    // Dispatch deletePromosi action
    dispatch(deletePromosi(id))
      .then(() => {
        console.log("Successfully deleted");
      })
      .catch((error) => {
        console.error("Error deleting promosi:", error);
      });
  };

  const handleSaveData = (data) => {
    const formData = new FormData();

    if (data["Gambar"]) {
      formData.append("image", data["Gambar"]);
    }

    if (data["Nama Promosi"]) {
      formData.append("title", data["Nama Promosi"]);
    }

    if (currentId) {
      dispatch(editPromosi({ id: currentId, formData }))
        .then(() => {
          setShowModal(false);
        })
        .catch((error) => {
          console.error("Error editing promosi:", error);
        });
    } else {
      dispatch(addPromosi(formData))
        .then(() => {
          setShowModal(false);
        })
        .catch((error) => {
          console.error("Error adding promosi:", error);
        });
    }
  };

  const handleFilter = (event) => {
    const newData = promosiData
      .map((item, index) => ({ ...item, index: index + 1 }))
      .filter((row) =>
        row.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    setRecords(newData);
  };

  return (
    <div className="flex">
      <SidebarOwner page="kamar" />
      <div className="flex-1 ml-[300px] p-4 font-montserrat">
        {/* Title */}
        <h1 className="flex justify-center text-5xl mt-4 text-gray-800 font-black">
          Kamar
        </h1>
        <Modal
          show={showModal}
          handleClose={handleCloseModal}
          button={{
            clicked: handleSaveData,
            title: currentId ? "Update Data" : "Simpan Data",
          }}
          contentModal={modalData}
          title={modalTitle}
        />

        {/* Contents */}
        <div className="w-full mt-4 flex justify-between items-center">
          <div className="relative w-full max-w-md ml-2">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="w-full pl-10 p-1 border border-tertiary-900 rounded-md"
              type="text"
              placeholder="Search..."
              onChange={handleFilter}
            />
          </div>
          <button
            onClick={handleOpenModal}
            className="ml-4 px-4 py-2 bg-tertiary-500 hover:bg-tertiary-800 text-white rounded-xl"
          >
            Tambah
          </button>
        </div>
        <Table dataColumns={dataColumns} data={records} isLoading={isLoading} />
      </div>
    </div>
  );
}
