import React from 'react';
import { FaPlus } from 'react-icons/fa';

function ButtonTambah({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-lg text-white py-2 px-4 rounded md:ml-8 hover:bg-blue-500/50 duration-100 flex items-center"
    >
      <FaPlus className="mr-2" />
      {children}
    </button>
  );
}
export default ButtonTambah;