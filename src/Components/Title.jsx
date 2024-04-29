import React from 'react'
import '../Styles/EstilosTitulo.css'

export default function Title({tit}) {

  return (
    <div className='conTitulo'>
            <h1>{tit}</h1> 
    </div>
  )
}
