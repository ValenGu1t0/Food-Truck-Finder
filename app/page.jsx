'use client'

import { useState } from "react";
import FormularioBusqueda from "./ui/formulario/FormularioBusqueda";
import Mapa from "./ui/mapa/Mapa";

export default function Home() {

    /* Estado general de la App, con los foodtrucks filtrados */
    const [foodTrucks, setFoodTrucks] = useState([]);

    /* Posicion Inicial, escalable a geolocalizacion en un futuro */
    const [userLat, setUserLat] = useState(37.77493);
    const [userLng, setUserLng] = useState(-122.41942);


    const handleSubmit = async (meal, radius) => {

      try {

        const response = await fetch("/api/foodtrucks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ meal, radius, userLat, userLng })
        });
    
        if (!response.ok) {  throw new Error("Error al obtener los food trucks");  }
    
        const data = await response.json();

        setFoodTrucks(data);

        if (data.length === 0) {  window.alert("No food trucks found near your area. Try searching for another meal!");  }
    
      } catch (error) {  console.error("Error en la solicitud:", error); }
    };

    return (

      <div className="flex flex-col-reverse w-full md:flex-row lg:flex-row">

        <div className="w-full p-8 flex justify-center items-center md:w-2/3">
          {/* Pasamos como prop el estado actual de Food-Trucks (ya filtrados) y la pos. del client */}
          <Mapa lat={userLat} lng={userLng} foodTrucks={foodTrucks} />
        </div>

        <div className="w-full pt-8 px-8 text-black flex justify-center items-center md:w-1/3 md:pt-0 lg:pt-0">
          {/* Pasamos como prop la funcion que solicita al Back */}
          <FormularioBusqueda handleSubmit={handleSubmit} />
        </div>

      </div>

    );
}