import React from 'react'
import Header from '../Components/Header'
import '../Styles/EstilosLogin.css'

export default function Login() {
  return (
    <div className='loginpage'>
        <Header />
        <div className='cuadrologin'>
            <h1>Login</h1>
            <h3>User</h3>
            <input className='user' type="text" />
            <h3>Password</h3>
            <input className='password' type="text" name="" id="" />
            <button className='loginbutton'>Login</button>
        </div>
    </div>
  )
}
