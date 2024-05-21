import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import ThreeDotsWave from '../loaders/three-dots-wave';

export default function ChatDropdown({ isOpen }) {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('chatMessages');
  };

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    try {
      setIsLoading(true);
      const response = await axios.post('http://127.0.0.1:8000/api/chat', { message: inputValue });
      const botMessage = { text: response.data.response, sender: 'bot' };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Oops! Something went wrong. Please try again.', sender: 'bot' };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-0 right-0 mb-24 mr-8 z-20">
          <div className="right-0 mt-2 w-96 h-full bg-primary-100 rounded overflow-hidden shadow-xl z-10">
            <div className='border-b-1 pb-2 pt-4 flex items-center justify-center bg-quaternary-600'>
              <div className='inline-flex items-center'>
                <span className='ml-2 text-2xl font-medium text-primary-50'>Chatbot</span>
              </div>
            </div>
            <div className='h-96 flex flex-col space-y-2 max-w-md px-2 overflow-y-auto' ref={messagesContainerRef}>
              <div className='flex flex-col items-start'>
                <span className='bg-secondary-800 text-primary-50 px-4 py-2 rounded-b-full rounded-tr-full mt-2'>Hi.. how i can help you?</span>
              </div>
              {messages.map((message, index) => (
                <div key={index} className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <span
                    className={`inline-block px-4 py-2 ${message.sender === 'user' ? 'rounded-b-[30px] rounded-tl-[30px] bg-tertiary-700 text-primary-50 ml-10 text-left' : 'bg-secondary-800 text-primary-50 rounded-b-[30px] rounded-tr-[30px] mr-8'} shadow`}>
                    {message.text}
                  </span>
                </div>
              ))}
              <div className='flex items-start ml-4'>
                {isLoading && (
                  <div >
                    <ThreeDotsWave />
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center py-2 px-1 bg-quaternary-600'>
              <input type="text"
                className='flex-1 rounded-lg px-4 py-2 mr-2 ml-4 placeholder:text-quaternary-300 outline outline-0 focus:outline-0'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder='type here...' />
              <button
                onClick={sendMessage}
                type='submit'
                className='px-2 py-2 rounded-lg mr-4 text-primary-50'>
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
