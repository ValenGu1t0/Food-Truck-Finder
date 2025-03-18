
/*

Decidí que se pueda filtrar por tipo de comida, a través de las propiedad "fooditems",
y que si no se indica ninguna comida en especial, se muestren todos los foodtruck cercanos.

Además, agregué un radio de busqueda desde 1km a 5km, cubriendo gran parte de la superficie 
de San Francisco. El resultado se toma en millas y se transforma a kilometros; además, se
calcula el radio real con la fórmula de Haversine para una medida realista de la distancia.

*/

// Funcion de Havernsine - calcula el radio de km en base a una ubicacion (teniendo en cuenta la curvatura de la tierra)
function haversine(lat1, lon1, lat2, lon2) {

    const R = 6371;   // Radio de la Tierra en km
    const toRad = angle => (Math.PI / 180) * angle;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = 

        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}



// Back-End
export async function POST(req) {

    if (req.method !== "POST") {  return Response.json({ error: "Solicitud no permitida" }, { status: 405 });  }

    try {

      const { meal, radius, userLat, userLng } = await req.json();
      const radiusKm = Number(radius) * 1.6;    // de 1 a 5 millas max.

      const response = await fetch("https://data.sfgov.org/resource/rqzj-sfat.json");

      if (!response.ok) {  throw new Error("Error al obtener los datos de la API externa");  }

      const data = await response.json();

        const filteredTrucks = data.filter(truck => {

            const hasMeal = meal ? truck.fooditems && truck.fooditems.toLowerCase().includes(meal.toLowerCase()) : true;

            const truckLat = Number(truck.latitude);
            const truckLng = Number(truck.longitude);

            // Calculamos la distancia usando la funcion de Haversine
            const distance = haversine(userLat, userLng, truckLat, truckLng);

            return hasMeal && distance <= radiusKm;

        });

        return new Response(JSON.stringify(filteredTrucks), {

            status: 200,
            headers: { "Content-Type": "application/json" }

        });

    } catch (error) {  return Response.json({ error: "Error al obtener los datos" }, { status: 500 })  }

}
