import React from 'react'
import Header from '../Components/Header'
import '../Styles/EstilosRegister.css'

export default function Register() {
    const registrarse = (e) => {
        e.preventDefault();
        const Nombre = e.target.name.value;
        const Correo_electronico = e.target.email.value;
        const Contraseña = e.target.password.value;
        try{
            fetch('http://localhost:3000/servicios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:4000'
                },
                body: JSON.stringify({Nombre, Correo_electronico, Contraseña})
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status);
                if(data.status === 200){
                    window.location.href = '/login';
                }else{
                    window.location.href = '/login';
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className='registerpage'>
            <Header />
            <div className='cuadroregister'>
                <form onSubmit={registrarse}>
                    <h1>Register</h1>
                    <h3>Nombre</h3>
                    <div className='nombre'>
                        <input className='nom' type="text" name='name'/>
                    </div>
                    <h3>Correo</h3>
                    <div className='correo'>
                        <input className='cor' type="text" name='email'/>
                    </div>
                    <h3>Contraseña</h3>
                    <div className='password'>
                        <input className='pass' type='text' name='password'/>
                    </div>
                    <button className='Registerbutton' type='submit'>Registrarse</button>
                </form>

            </div>
        </div>
    )
}
