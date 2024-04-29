import React from 'react'
import Header from '../Components/Header'
import Description from '../Components/Description'
import Detalles from '../Components/Detalles'
import Title from '../Components/Title'

export default function Lugar() {
  return (
    <div className='lugarpage'>
        <Header />
        <Title tit='Casa del Arbol'/>
        <Description descripcion='asdjiasdijhas' imagen='https://github.com/CarlosAl21/imagenesAWM/blob/main/imgs/ecuador-casa-del-arbol-7.jpg?raw=true'/>
        <Detalles hor='22' pre='33.3' ubi='quito' cat='aventura'/>
    </div>
  )
}
