import React from 'react'
import '../Styles/EstilosContenedores.css'

export default function Contenedores() {
    const sitios = [
        {
          nombre: "Juan",
          foto: ""
        },
        {
          nombre: "María",
          foto: ""
        },
        {
          nombre: "Pedro",
          foto: ""
        }
      ];
  return (
    <div className='contenedor'>
      {sitios.map((sitio, index) => (
        <div key={index} className='elemento'>
          <img src={sitio.foto} alt='' />
          <h1>{sitio.nombre}</h1>
          <button>Ir</button>
        </div>
      ))}
    </div>
  );
}
