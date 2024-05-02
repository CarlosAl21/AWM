import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Description from '../Components/Description';
import Detalles from '../Components/Detalles';
import Title from '../Components/Title';
import '../Styles/EstilosLugar.css';
import Header from '../Components/Header';

export default function Lugar() {
  const [lugarTuristico, setLugarTuristico] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchLugarTuristico = async () => {
      try {
        const response = await fetch(`http://localhost:3000/servicioLugar/${id}`);
        if (response.ok) {
          const data = await response.json();
          setLugarTuristico(data);
        } else {
          console.error('Error al cargar los datos del lugar turístico');
        }
      } catch (error) {
        console.error('Error al conectar con la API:', error);
      }
    };

    fetchLugarTuristico();
  }, [id]);

  return (
    <>
      <Header />
      <div className='lugarpage'>
        <div>
          {lugarTuristico && (
            <>
              <Title tit={lugarTuristico.Nombre} />
              <Description descripcion={lugarTuristico.Descripcion} imagen={lugarTuristico.Imagen} />
              <Detalles hor={lugarTuristico.Horarios} pre={lugarTuristico.Precios} ubi={lugarTuristico.Ubicacion} cat={lugarTuristico.Categoria} />
            </>
          )}
        </div>
      </div>
    </>
  );
}