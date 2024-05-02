import React from 'react';
import '../Styles/EstilosNav.css';
import Sidebar from './Sidebar';
import logo from '../Assets/logobanios.png';

export default function Nav() {
  return (
    <div className='navegador'>
      <div className='side'>
        <Sidebar />
      </div>
      <div className='contlogo'>
      <a href='/' className='Logo'>
        <img src={logo} alt='' />
      </a>
      </div>
      <div className='buscador'>
        <input className='buscadorinput' type="text" />
        <button className='buscadorbutton'>Buscar</button>
        <a className='loginbutton' href="/login">Login</a>
      </div>      
    </div>
  );
}