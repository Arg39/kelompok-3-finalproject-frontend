import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-quaternary-900 text-primary-50 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8">
            <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-semibold">Rent id</h2>
            </div>
            <div className="flex mt-4 md:mt-0">
                <button className="mr-4 hover:text-gray-400">Tentang Kami</button>
                <button className="mr-4 hover:text-gray-400">Bantuan</button>
                <button className="hover:text-gray-400">Kebijakan Privasi</button>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-center">&copy; 2024 RentId. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
