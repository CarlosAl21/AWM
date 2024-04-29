import React from 'react';
import '../Styles/EstilosDetalles.css'

export default function Detalles({ hor, pre, ubi, cat }) {
    const contenido = [
        {
            horarios: hor,
            precios: pre,
            ubicacion: ubi,
            categoria: cat
        }
    ];

    return (
        <div>
            {contenido.map((item, index) => (
                <div key={index} className='detalles'>
                    <h2>Detalles</h2>
                    <ul>
                        <li>Horarios</li>
                        <p>{item.horarios}</p>
                        <li>Precios</li>
                        <p>{item.precios}</p>
                        <li>Ubicación</li>
                        <p>{item.ubicacion}</p>
                    </ul>
                    <button>{item.categoria}</button>
                </div>
            ))}
        </div>
    );
}