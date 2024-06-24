// ModalForm Component
import React, { useState, useEffect } from 'react';

function ModalForm({ isOpen, onClose, onSubmit, formFields, title, initialData }) {
  const initialFormState = formFields.reduce((acc, field) => {
    acc[field.name] = initialData ? initialData[field.name] : '';
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialFormState);
  const [gambar, setGambar] = useState(null); 

  useEffect(() => {
    setFormState(initialFormState);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGambar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formState };
    if (gambar) {
      newData.gambar = URL.createObjectURL(gambar); 
    }
    onSubmit(newData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-4/5 overflow-y-auto">
        <h2 className="text-2xl mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {formFields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-gray-700">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    className="w-full px-3 py-2 border rounded"
                    value={formState[field.name]}
                    onChange={handleChange}
                    required={field.required}
                  />
                ) : (
                  field.type === 'file' ? ( // Tambahkan penanganan input file
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full px-3 py-2 border rounded"
                      onChange={handleFileChange}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full px-3 py-2 border rounded"
                      value={formState[field.name]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  )
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {initialData ? 'Edit' : 'Tambah'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
