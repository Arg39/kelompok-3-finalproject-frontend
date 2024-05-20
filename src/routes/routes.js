import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notfound from '../pages/notfound';
import Home from '../pages/home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  );
};

export default AppRoutes;
