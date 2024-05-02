import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import "../Styles/EstilosItinerario.css";
import Footer from "../Components/Footer";

export default function Itinerario() {
  const [placesData, setPlacesData] = useState([]);
  const [itineraryData, setItineraryData] = useState({ places: [] });
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const fetchLugaresTuristicos = async () => {
      try {
        const response = await fetch("http://localhost:3000/servicioLugar");
        if (response.ok) {
          const data = await response.json();
          setPlacesData(data);
        } else {
          console.error("Error al cargar los datos de los lugares turísticos");
        }
      } catch (error) {
        console.error("Error al conectar con la API:", error);
      }
    };

    fetchLugaresTuristicos();
  }, []);

  const addToItinerary = (place) => {
    const openingHour = parseInt(place.Horarios.split(" ")[3]);

    const updatedItinerary = [
      ...itineraryData.places,
      { ...place, openingHour },
    ].sort((a, b) => {
      return a.openingHour - b.openingHour;
    });
    setItineraryData({ places: updatedItinerary });

    setPlacesData((prevData) => prevData.filter((p) => p.ID_Lugar !== place.ID_Lugar));
    setShowButton(true);
  };

  const removeFromItinerary = (place) => {
    setPlacesData((prevData) => [...prevData, place]);
    setItineraryData((prevData) => ({
      places: prevData.places.filter((p) => p.ID_Lugar !== place.ID_Lugar),
    }));
    setShowButton(itineraryData.places.length > 1);
  };

  const generateItinerary = async () => {
    const Correo_electronico = localStorage.getItem('Correo_electronico');
    if (!Correo_electronico) {
      alert('Inicia sesión para generar un itinerario');
      return;
    }
  
    try {
      const responseUsuario = await fetch(`http://localhost:3000/servicioUsuario/email/${Correo_electronico}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4000',
        },
      });
  
      if (responseUsuario.ok) {
        const dataUsuario = await responseUsuario.json();
        const ID_Usuario = dataUsuario.ID_Usuario;
  
        // Obtener solo los IDs de los lugares seleccionados
        const lugaresSeleccionados = itineraryData.places.map(place => place.ID_Lugar);
  
        // Crear el objeto de itinerario con el ID del usuario
        const itinerarioData = {
          usuario: ID_Usuario,
        };
  
        // Realizar la solicitud para crear el itinerario
        const responseItinerario = await fetch(`http://localhost:3000/itinerarios/${ID_Usuario}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itinerarioData),
        });
  
        if (responseItinerario.ok) {
          const dataItinerario = await responseItinerario.json();
          const itinerarioId = dataItinerario.id;
  
          // Asociar los lugares turísticos al itinerario
          for (const lugarId of lugaresSeleccionados) {
            await fetch(`http://localhost:3000/itinerarios/${itinerarioId}/lugares/${lugarId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
          }
  
          console.log('Itinerario y lugares asociados con éxito');
          window.location.href = '/itinerario';
          // Realizar alguna acción adicional si es necesario
        } else {
          console.error('Error al generar el itinerario');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="itipage">
      <Header />
      <div className="itinerary">
        <h1>Itinerario</h1>
        <div className="itinerary-places">
          {itineraryData.places && itineraryData.places.map((place) => (
            <div key={place.ID_Lugar} className="place">
              <img src={place.Imagen} alt={place.Nombre} />
              <h3>{place.Nombre}</h3>
              <p>{place.Descripcion}</p>
              <span>{place.Horarios}</span>
              <button onClick={() => removeFromItinerary(place)}>
                Eliminar del itinerario
              </button>
            </div>
          ))}
        </div>
        {showButton && (
          <div className="generate-itinerary">
            <button onClick={generateItinerary}>Generar Itinerario</button>
          </div>
        )}
        <h2 style={{ textAlign: "center" }}>Lugares Disponibles</h2>
        <div className="places">
          {placesData.map((place) => (
            <div key={place.ID_Lugar} className="place">
              <img src={place.Imagen} alt={place.Nombre} />
              <h3>{place.Nombre}</h3>
              <p>{place.Descripcion}</p>
              <span>{place.Horarios}</span>
              <button onClick={() => addToItinerary(place)}>
                Agregar al itinerario
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

