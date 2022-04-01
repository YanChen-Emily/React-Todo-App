import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';


export const routes = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail" element={<Detail />}/>
    </Routes>
  );
};
