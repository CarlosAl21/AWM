import React from 'react';
import '../Styles/EstilosNav.css';

export default function Nav() {
  return (
    <div className='navegador'>
      <div className='contlogo'>
      <a href='/' className='Logo'>
        <img src='logobanios.png' alt='' />
      </a>
      </div>
      <div className='botones'>
        <a href="/">Inicio</a>
        <a href="/">Lugares Turisticos</a>
        <a href="/">Nosotros</a>
      </div>
      <div className='buscador'>
        <input className='buscadorinput' type="text" />
        <button className='buscadorbutton'>Buscar</button>
        <a className='loginbutton' href="/login">Login</a>
      </div>      
    </div>
  );
}