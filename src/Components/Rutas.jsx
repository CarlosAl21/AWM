import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import  Nav  from "./Nav";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export default function Rutas1() {
  return (
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
