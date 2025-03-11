'use client'

import { useState, useEffect } from "react";

// Cargar react-leaflet dinámicamente y deshabilitar SSR para usar Mapa en el client
import dynamic from "next/dynamic";

// Instanciamos el Mapa de Leatflet
const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false } );

// Instanciamos los layer, que son las capas con imagenes que conforman el mapa 
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false } );

// Instanciamos el marker, elemento que nos permite mostrar un marcador en el mapa
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false } );

// Instanciamos popup, elemento que muestra información a partir de un marcador
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false } );


// San Francisco - lat y lng iniciales desde Home // Recibe foodTrucks actuales desde Home 
export default function Mapa({ lat, lng, zoom = 12, foodTrucks}) {

    
    // Evitamos que leaflet se cargue en el servidor
    const [L, setL] = useState(null);

    useEffect(() => {

        import("leaflet").then((leaflet) => {  setL(leaflet);  });

    }, []);

    if (!L) return <p>Cargando mapa...</p>;


    // Icono para marcadores
    const markerIcon = new L.Icon({ iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [20, 30], iconAnchor: [12, 41], popupAnchor: [1, -34] });
    
    // Icono para posicion inicial (User)
    const userMarkerIcon = L.icon({ iconUrl: "/icons/marker.png", 
    iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] });


    // Componente Map
    return (

        <Map center={[lat, lng]} zoom={zoom} className="w-full h-[500px] rounded-xl shadow-xl">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
            {/* Posicion Inicial */}
            <Marker position={[lat, lng]} icon={userMarkerIcon} />

            {/* Recorremos el estado actual de FoodTrucks y agregamos un marcador a cada uno que corresponda */}
            {foodTrucks.map((truck, index) => (

                <Marker key={index} position={[truck.latitude, truck.longitude]} icon={markerIcon}>

                    <Popup>
                        <strong>{truck.applicant}</strong><br /><br />
                        <strong>Meals: </strong>{truck.fooditems}<br /><br />
                        <strong>Address: </strong>{truck.address}
                    </Popup>

                </Marker>
            ))}
        </Map>
    );
}