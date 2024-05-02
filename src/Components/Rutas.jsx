import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SitiosTur from '../Pages/SitiosTur';
import Register from '../Pages/Register';
import Lugar from '../Pages/Lugar';
import Itinerario from '../Pages/Itinerario';

export default function Rutas() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/sitiosturisticos' element={<SitiosTur/>} />
      <Route path='/lugarturistico/:id' element={<Lugar/>} />
      <Route path='/itinerario' element={<Itinerario/>} />
    </Routes>
    </BrowserRouter>
  )
}