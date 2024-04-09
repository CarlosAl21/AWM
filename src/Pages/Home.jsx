import React from 'react'
import '../Styles/stylesMain.css'
import Header from '../Components/Header'
import Contenedores from '../Components/Contenedores'

export default function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Contenedores/>
    </div>
  )
}
