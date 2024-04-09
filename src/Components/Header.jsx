import React from 'react'
import '../Styles/EstilosHeader.css'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='Encabezado'>
        <img src='logobanios.png' alt='' />
        <Nav />  
      </header> 
  )
}
