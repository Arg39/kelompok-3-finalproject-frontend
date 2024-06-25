import React, { useState, useEffect } from "react";

export default function Modal({
  show,
  handleClose,
  button,
  title,
  contentModal,
}) {
  const [inputData, setInputData] = useState(
    contentModal.reduce(
      (acc, item) => ({ ...acc, [item.title]: item.value || "" }),
      {}
    )
  );

  useEffect(() => {
    setInputData(
      contentModal.reduce(
        (acc, item) => ({ ...acc, [item.title]: item.value || "" }),
        {}
      )
    );
  }, [contentModal]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setInputData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setInputData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (button.clicked) {
      button.clicked(inputData);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded shadow-md w-1/2 max-h-[90vh] overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl mb-4">{title}</h2>
          <span
            className="text-black float-right text-4xl cursor-pointer"
            onClick={handleClose}
          >
            &times;
          </span>
        </div>
        <form
          onSubmit={handleSaveClick}
          className="flex-1 overflow-y-auto"
          encType="multipart/form-data"
        >
          {contentModal.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.title} className="block mb-2">
                {field.title}
              </label>
              {field.type === "file" ? (
                <input
                  type={field.type}
                  name={field.title}
                  onChange={handleChange}
                  accept={field.accept || ".jpg,.jpeg,.png,.gif"}
                  className="border p-2 mb-4 w-full"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.title}
                  value={inputData[field.title]}
                  onChange={handleChange}
                  placeholder={`Masukkan ${field.title.toLowerCase()}`}
                  className="border p-2 mb-4 w-full"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {button.title}
          </button>
        </form>
      </div>
    </div>
  );
}
