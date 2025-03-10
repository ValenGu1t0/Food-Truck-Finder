
/* Back-End /

Decidí que se pueda filtrar por tipo de comida, a través de las propiedad "fooditems",
y que si no se indica ninguna comida en especial, se muestren todos los foodtruck.

*/

export async function POST(req) {
 

    // Verificamos que el método sea POST (poco probable pero tiene que estar)
    if (req.method !== "POST") {  return Response.json({ error: "Method Not Allowed" }, { status: 405 });  }


    try {

      // Desestructuramos los datos pasados del Front (request)
      const { meal, radius } = await req.json();

      // Convertimos radius de millas a kilómetros y en Int
      const radiusKm = Number(radius) * 1.6;


      // Fetch de la API externa
      const response = await fetch("https://data.sfgov.org/resource/rqzj-sfat.json");

      // Si la API falla, devolvemos error (poco probable pero tiene que estar)
      if (!response.ok) { throw new Error("Error al obtener los datos de la API externa"); }

      // Convertimos la respuesta a JSON
      const data = await response.json();

      /* Y ahora si combinamos los input del client con la respuesta de la API para mostrar resultados */

      // Filtramos food trucks por comida ingresada
      const filteredTrucks = data.filter(truck => {

        const hasMeal = meal ? truck.fooditems && truck.fooditems.toLowerCase().includes(meal.toLowerCase()) : true;
        return hasMeal;

      });

      // Retornamos la respuesta correcta
      return new Response(JSON.stringify(filteredTrucks), {

        status: 200,
        headers: { "Content-Type": "application/json" }

      });
    

    } catch (error) {  return Response.json({ error: "Error al obtener los datos" }, { status: 500 });  }
}