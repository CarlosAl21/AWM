import React from 'react';
import '../Styles/EstilosNav.css';

export default function Nav() {
  return (
    <div className='navegador'>
      <div className='botones'>
        <button><a href="/">Inicio</a></button>
        <button>Sitios turisticos</button>
        <button>Contacto</button>
      </div>
      <div className='buscador'>
        <input className='buscadorinput' type="text" />
        <button className='buscadorbutton'>Buscar</button>
        <button className='login'><a href="/login">Login</a></button>
      </div>      
    </div>
  );
}