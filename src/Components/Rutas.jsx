import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SitiosTur from '../Pages/SitiosTur';
import Register from '../Pages/Register';

export default function Rutas() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/sitiosturisticos' element={<SitiosTur/>} />
    </Routes>
    </BrowserRouter>
  )
}
