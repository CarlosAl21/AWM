import React from 'react';
import '../Styles/EstilosNav.css';

export default function Nav() {
  return (
    <div className='navegador'>
      <div className='botones'>
        <button>Home</button>
        <button>Sitios turisticos</button>
        <button>Contacto</button>
      </div>
      <div className='buscador'>
        <input className='buscadorinput' type="text" />
        <button className='buscadorbutton'>Buscar</button>
        <button className='login'>Login</button>
      </div>      
    </div>
  );
}