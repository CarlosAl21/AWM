import React, { useState } from 'react'
import Header from '../Components/Header'
import '../Styles/EstilosLogin.css'
import { CiUser } from "react-icons/ci";  
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import Footer from '../Components/Footer'

export default function Login() {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='loginpage'>
        <Header />
        <div className='cuadrologin'>
            <form>
            <h1>Login</h1>
            <h3>Correo</h3>
            <div className='userInp'>
              <input className='user' type="text" name='name'/>
              <CiUser className='logouser'/>
            </div>
            <h3>Contraseña</h3>
            <div className='passwordInp'>
              <input className='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)} name='password'/>
              <button onClick={togglePasswordVisibility} className='logocandado'>
                {showPassword ? <CiUnlock/> : <CiLock/>}
              </button>
            </div>
            
            <button className='loginbutton'><a href="/">Ingersar </a></button>
            <button className='Registerbutton'><a href="/register">Registrarse</a></button>
            </form>
        </div>
        <Footer/>
    </div>
    
  )
}
