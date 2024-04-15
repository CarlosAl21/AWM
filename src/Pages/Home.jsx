import React from 'react'
import '../Styles/stylesMain.css'
import Header from '../Components/Header'
import Contenedores from '../Components/Contenedores'
import Slider from '../Components/Slider'
import { TbPointFilled } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Slider/>
        <h1 className='rec'><TbPointFilled />Sitios Recomendados<FaArrowRight /></h1>
        <Contenedores/>
    </div>
  )
}
