import React, { useState } from "react";
import Header from "../Components/Header";
import "../Styles/EstilosItinerario.css";

export default function Itinerario() {
  const initialPlacesData = {
    places: [
      {
        id: 1,
        name: "Cascada de Agoyan",
        description:
          "Una impresionante cascada ubicada en las afueras de Baños, con una caída de agua de más de 60 metros.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Tarabita_-_Cascada_de_Agoy%C3%A1n.JPG",
        schedule: "Todos los días: 9:00 am - 6:00 pm",
      },
      {
        id: 2,
        name: "Cascada Pailón del Diablo",
        description:
          "Una de las cascadas más famosas de Baños, conocida por su espectacular belleza natural y la oportunidad de caminar detrás de la cortina de agua.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Colage_pailon_del_diablo.jpg",
        schedule: "Todos los días: 8:00 am - 5:00 pm",
      },
      {
        id: 3,
        name: "Mirador de la Virgen",
        description:
          "Un mirador ubicado en lo alto de una colina, desde donde se puede disfrutar de una vista panorámica de Baños y sus alrededores.",
        image: "mirador-virgen.jpg",
        schedule: "Todos los días: 10:00 am - 8:00 pm",
      },
      {
        id: 4,
        name: "Termas de la Virgen",
        description:
          "Un complejo de aguas termales con piscinas de diferentes temperaturas, ideal para relajarse y disfrutar de las propiedades curativas del agua.",
        image: "termas-virgen.jpg",
        schedule: "Todos los días: 7:00 am - 10:00 pm",
      },
      {
        id: 5,
        name: "Casa del Árbol",
        description:
          "Una casa construida al borde de un acantilado con una columpio conocido como 'el columpio del fin del mundo', que ofrece una emocionante experiencia y vistas impresionantes.",
        image: "casa-arbol.jpg",
        schedule: "Todos los días: 8:30 am - 7:00 pm",
      },
    ],
  };

  const [placesData, setPlacesData] = useState(initialPlacesData);
  const [itineraryData, setItineraryData] = useState({ places: [] });

  const addToItinerary = (place) => {
    // Calculamos la hora de apertura como un número entero
    const openingHour = parseInt(place.schedule.split(" ")[3]);

    const updatedItinerary = [
      ...itineraryData.places,
      { ...place, openingHour },
    ].sort((a, b) => {
      return a.openingHour - b.openingHour;
    });
    setItineraryData({ places: updatedItinerary });

    setPlacesData((prevData) => ({
      places: prevData.places.filter((p) => p.id !== place.id),
    }));
  };

  const removeFromItinerary = (place) => {
    setPlacesData((prevData) => ({
      places: [...prevData.places, place],
    }));
    setItineraryData((prevData) => ({
      places: prevData.places.filter((p) => p.id !== place.id),
    }));
  };

  return (
    <>
      <Header />
      <div className="itinerary">
        <h1>Itinerario</h1>
        <div className="itinerary-places">
          {itineraryData.places.map((place) => (
            <div key={place.id} className="place">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p>{place.schedule}</p>
              <button onClick={() => removeFromItinerary(place)}>
                Eliminar del itinerario
              </button>
            </div>
          ))}
        </div>
        <h2 style={{ textAlign: "center" }}>Lugares Disponibles</h2>
        <div className="places">
          {placesData.places.map((place) => (
            <div key={place.id} className="place">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p>{place.schedule}</p>
              <button onClick={() => addToItinerary(place)}>
                Agregar al itinerario
              </button>
            </div>
          ))}
        </div>
        <div className="details"></div>
      </div>
    </>
  );
}
