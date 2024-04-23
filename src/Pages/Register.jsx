import React from 'react'
import Header from '../Components/Header'
import '../Styles/EstilosRegister.css'

export default function Register() {
    return (
        <div className='registerpage'>
            <Header />
            <div className='cuadroregister'>
                <h1>Register</h1>
                <h3>Nombre</h3>
                <div className='nombre'>
                    <input className='nom' type="text" />
                </div>
                <h3>Correo</h3>
                <div className='correo'>
                    <input className='cor' type="text" />
                </div>
                <h3>Contraseña</h3>
                <div className='password'>
                    <input className='pass' type='text'/>
                </div>
                <button className='Registerbutton'><a href="/">Registrarse</a></button>
            </div>
        </div>
    )
}
