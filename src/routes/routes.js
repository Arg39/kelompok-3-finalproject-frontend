import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notfound from '../pages/notfound';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
