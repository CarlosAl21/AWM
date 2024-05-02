import React, { useState, useEffect } from 'react';
import '../Styles/EstilosContenedores.css';

export default function Contenedores() {
  const [lugaresturisticos, setLugaresTuristicos] = useState([]);

  useEffect(() => {
    const fetchLugaresTuristicos = async () => {
      try {
        const response = await fetch('http://localhost:3000/servicioLugar');
        if (response.ok) {
          const data = await response.json();
          setLugaresTuristicos(data);
        } else {
          console.error('Error al cargar los datos de los lugares turísticos');
        }
      } catch (error) {
        console.error('Error al conectar con la API:', error);
      }
    };

    fetchLugaresTuristicos();
  }, []);

  return (
    <div className='contenedor'>
      {lugaresturisticos.map((lugar, index) => (
        <div key={index} className='elemento'>
          <img src={lugar.Imagen} alt={lugar.Nombre} />
          <h1>{lugar.Nombre}</h1>
          <button className='btnIr'><a href={`/lugarturistico/${lugar.ID_Lugar}`}>Ir</a></button>
        </div>
      ))}
    </div>
  );
}