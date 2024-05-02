import React from 'react'
import Header from '../Components/Header'
import Contenedores from '../Components/Contenedores'
import { TbPointFilled } from "react-icons/tb";
import '../Styles/EstilosSitiosTuristicos.css'
import Footer from '../Components/Footer';

export default function SitiosTur() {
  return (
    <div className='principal'>
        <Header />
        <h1 className='sitios'><TbPointFilled />Sitios Turísticos</h1>
        <Contenedores />
        <Footer />
    </div>
  )
}
