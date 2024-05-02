import React, { useState } from 'react'
import Header from '../Components/Header'
import '../Styles/EstilosLogin.css'
import { CiUser } from "react-icons/ci";  
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import Footer from '../Components/Footer'

export default function Login() {
  const loguear = async (e) => {
    e.preventDefault();
    const Correo_electronico = e.target.email.value;
    const Contraseña = e.target.password.value;
    
    try {
      const response = await fetch(`http://localhost:3000/servicioUsuario/email/${Correo_electronico}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data && data.Contraseña === Contraseña) {
          localStorage.setItem('Correo_electronico', Correo_electronico);
          console.log(response);
          // Contraseña válida, redirigir al usuario a la página principal
          window.location.href = '/';
        } else {
          // Contraseña incorrecta, mostrar mensaje de error
          console.log('Contraseña incorrecta');
          alert('Contraseña incorrecta');
        }
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='loginpage'>
        <Header />
        <div className='cuadrologin'>
            <form onSubmit={loguear}>
            <h1>Login</h1>
            <h3>Correo</h3>
            <div className='userInp'>
              <input className='user' type="text" name='email' required/>
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
            
            <button className='loginbutton' type='submit'>Ingersar </button>
            <button className='Registerbutton'><a href="/register">Registrarse</a></button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}
