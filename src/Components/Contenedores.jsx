import React from 'react'
import '../Styles/EstilosContenedores.css'

export default function Contenedores() {
    const sitios = [
        {
          nombre: "Casa del Arbol",
          foto: "https://lapiznomada.com/wp-content/uploads/2015/12/ecuador-casa-del-arbol-7.jpg"
        },
        {
          nombre: "PiQchur",
          foto: "https://casasholidayhomes.com/images/blog_turismo/piQchur/pikchur.jpg"
        },
        {
          nombre: "Pailon del diablo",
          foto: "https://www.pailondeldiablo.ec/assets/public/images/catalog/prod_36_huge.jpg?1647471391"
        },
        {
          nombre: "Casa del Arbol",
          foto: "https://lapiznomada.com/wp-content/uploads/2015/12/ecuador-casa-del-arbol-7.jpg"
        },
        {
          nombre: "PiQchur",
          foto: "https://casasholidayhomes.com/images/blog_turismo/piQchur/pikchur.jpg"
        },
        {
          nombre: "Pailon del diablo",
          foto: "https://www.pailondeldiablo.ec/assets/public/images/catalog/prod_36_huge.jpg?1647471391"
        },
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
