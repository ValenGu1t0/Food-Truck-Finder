'use client'

import { useState, useEffect } from "react";

// Dynamic permite deshabilitar el SSR para poder usar el <Map> del lado del server
import dynamic from "next/dynamic";
import { useMapEvents } from "react-leaflet";

// Instanciamos el Mapa de Leatflet
const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false } );

// Instanciamos los layer, que son las capas con imagenes que conforman el mapa 
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false } );

// Instanciamos el marker, elemento que nos permite mostrar un marcador en el mapa
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false } );

// Instanciamos popup, elemento que muestra información a partir de un marcador
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false } );


// Recibe foodTrucks filtrados y la latlng iniciales
export default function Mapa({ lat, lng, setUserLat, setUserLng, zoom = 12, foodTrucks }) {

    
    // Evitamos que leaflet se cargue en el Client
    const [L, setL] = useState(null);

    useEffect(() => {

        import("leaflet").then((leaflet) => {  setL(leaflet);  });

    }, []);

    // Necesario para que L no renderice null
    if (!L) return <p className="text-xl font-semibold font-mono">Cargando mapa...</p>;

    // Icono para Food-Trucks
    const markerIcon = new L.Icon({ iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [20, 30], iconAnchor: [12, 41], popupAnchor: [1, -34] });
    
    // Icono para posicion inicial o la indicada por el User
    const userMarkerIcon = L.icon({ iconUrl: "/icons/marker.png", 
    iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] });


    // Permite hacer el marcador del User interactivo
    function MapClickHandler({ setUserLat, setUserLng }) {

        useMapEvents({

        click: (event) => {

            const { lat, lng } = event.latlng;
            setUserLat(lat);
            setUserLng(lng);
        }
    });
    return null;
    }   


    // Componente Map
    return (

        <Map center={[lat, lng]} zoom={zoom} className="w-full h-[500px] rounded-xl shadow-xl">

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
            {/* Componente para capturar clics en el mapa */}
            <MapClickHandler setUserLat={setUserLat} setUserLng={setUserLng} />

            {/* Posicion del User */}
            <Marker position={[lat, lng]} icon={userMarkerIcon} >
                <Popup><strong>You are here!</strong></Popup>
            </Marker>

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