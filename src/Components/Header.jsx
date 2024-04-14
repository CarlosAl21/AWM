import React from 'react'
import '../Styles/EstilosHeader.css'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='Encabezado'>
      <a href='/' className='Logo'>
        <img src='logobanios.png' alt='' />
        </a>
        <Nav />  
      </header> 
  )
}
