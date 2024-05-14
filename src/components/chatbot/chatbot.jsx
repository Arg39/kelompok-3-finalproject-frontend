import React, { useState } from 'react';
import { motion } from "framer-motion"
import ChatDropdown from './chatDropdown';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prevState => !prevState);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className=''>
      {/* Tombol "Open Chat" menyesuaikan diri berdasarkan status chat */}
      <motion.button whileHover={{ scale: [null, 1.1, 1.2] }} onClick={isChatOpen ? closeChat : toggleChat} className="fixed bottom-0 right-0 mb-8 mr-8 bg-[#F05454] hover:bg-[#C04343] font-bold py-2 px-2 rounded-full z-10">
        <div  className='text-[#F5F5F5] flex items-center justify-start'>
          {isChatOpen ? (
            <motion.div whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}> 
              <motion.svg className="w-10 h-10" transition={{ ease: "easeOut", duration: 2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </motion.svg>
              <motion.svg className="w-10 h-10 hidden" transition={{ ease: "easeInOut", duration: 2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
              </motion.svg>
            </motion.div>
          ) : (
            <motion.div whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}> 
              <motion.svg className="w-10 h-10 hidden" transition={{ ease: "easeInOut", duration: 2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </motion.svg>
              <motion.svg className="w-10 h-10" transition={{ ease: "easeOut", duration: 2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
              </motion.svg>
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Komponen "Chat Dropdown" ditampilkan hanya jika chat dibuka */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 z-20">
          <ChatDropdown isOpen={isChatOpen} onClose={closeChat} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
