import React from 'react';
import '../Styles/EstilosDescripcion.css';

export default function Description({descripcion, imagen }) {
    const contenido = [
        {
            desc: descripcion,
            foto: imagen
        }
    ];
    return (
        <div>
            {contenido.map((contenido) => (
                <div className='descripcion'>
                    <div className='contDesc'>
                        <img src={contenido.foto} alt=''/>
                        <p className='desc'>{contenido.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}