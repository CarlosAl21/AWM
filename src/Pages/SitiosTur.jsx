import React from 'react'
import Header from '../Components/Header'
import Contenedores from '../Components/Contenedores'
import { TbPointFilled } from "react-icons/tb";
import '../Styles/EstilosSitiosTuristicos.css'

export default function SitiosTur() {
  return (
    <div className='principal'>
        <Header />
        <h1 className='sitios'><TbPointFilled />Sitios Turisticos</h1>
        <Contenedores />
    </div>
  )
}
