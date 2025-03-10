'use client'

import L from "leaflet";

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

// Icono del marcador
const markerIcon = new L.Icon({ iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
iconSize: [20, 30], iconAnchor: [12, 41], popupAnchor: [1, -34], });


// San Francisco - Lat y Lng iniciales // Zoom - vista inicial del mapa // Recibe foodTrucks actuales desde Home 
export default function Mapa({ lat = 37.77493, lng = -122.41942, zoom = 12, foodTrucks}) {

    return (

        <Map center={[lat, lng]} zoom={zoom} className="w-full h-[500px] rounded-xl shadow-xl">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
            {/* Recorremos el estado actual de FoodTrucks y agregamos un marcador a cada uno que corresponda */}
            {foodTrucks.map((truck, index) => (

                <Marker key={index} position={[truck.latitude, truck.longitude]} icon={markerIcon}>

                    <Popup>
                        <strong>{truck.applicant}</strong> 
                        <p>Address: {truck.address}</p>
                    </Popup>

                </Marker>
            ))}
        </Map>
    );
}