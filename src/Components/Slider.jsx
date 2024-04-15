import React from 'react'
import estilos from '../Styles/EstilosSlider.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
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
    }
  ];
  // Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = sitios?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(sitios) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

  return (
    <div className='container'>
      <MdKeyboardArrowLeft onClick={anteriorImagen} type='button' className='flecha'/>
      {sitios.map((sitio, index) =>
        <div key={index} className={imagenActual === index
          ? `${estilos.slide} ${estilos.active}`
          : estilos.slide}>
          {imagenActual === index && (
            <img src={sitio.foto} alt={sitio.nombre} />
          )}
        </div>
      )
      }
      <MdOutlineKeyboardArrowRight onClick={siguienteImagen} type='button' className='flecha'/>

    </div>
  )
}
