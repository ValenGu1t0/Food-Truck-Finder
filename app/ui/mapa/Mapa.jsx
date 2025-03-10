"use client"; 

// Cargar react-leaflet dinámicamente y deshabilitar SSR
import dynamic from "next/dynamic";

// Instanciamos el Mapa de Leatflet
const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false } );

// Instanciamos los layer, que son las capas con imagenes que conforman el mapa 
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false } );


const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false } );


const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false } );

import L from "leaflet";

// Crear el ícono del marcador
const marker = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [20, 30], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
});


// Lat y lng iniciales - San Francisco // zoom es la vista inicial del mapa
export default function Mapa({ lat = 37.77493, lng = -122.41942, zoom = 12 }) {

    return (
        <Map center={[lat, lng]} zoom={zoom} className="w-full h-[500px] rounded-xl shadow-xl">

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[lat, lng]} icon={marker}>
                <Popup>Ubicación seleccionada</Popup>
            </Marker>

        </Map>
    );
}
