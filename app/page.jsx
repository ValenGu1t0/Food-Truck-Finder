'use client'

import { useState } from "react";
import FormularioBusqueda from "./ui/formulario/FormularioBusqueda";
import Mapa from "./ui/mapa/Mapa";

export default function Home() {

    /* Estado general de la App, con los foodtrucks filtrados */
    const [foodTrucks, setFoodTrucks] = useState([]);

    const handleSubmit = async (meal, radius) => {

      try {

          const response = await fetch("/api/foodtrucks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ meal, radius })
          });
    
          if (!response.ok) {  throw new Error("Error al obtener los food trucks");  }
    
          const data = await response.json();
          setFoodTrucks(data);
    
        } catch (error) {  console.error("Error en la solicitud:", error);  

        }
    };

    return (

      <div className="flex flex-col-reverse w-full md:flex-row lg:flex-row">

        <div className="w-full p-8 flex justify-center items-center md:w-2/3">
          {/* Pasamos como prop el estado actual de Food-Trucks (ya filtrados) */}
          <Mapa foodTrucks={foodTrucks} />
        </div>

        <div className="w-full pt-8 px-8 text-black flex justify-center items-center md:w-1/3 md:pt-0 lg:pt-0">
          {/* Pasamos como prop la funcion que solicita al Back */}
          <FormularioBusqueda handleSubmit={handleSubmit} />
        </div>

      </div>

    );
}