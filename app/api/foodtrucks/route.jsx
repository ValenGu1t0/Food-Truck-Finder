
/* Back-End */

export async function fetchData() {

      try {

        const response = await fetch("https://data.sfgov.org/resource/rqzj-sfat.json");
        const data = await response.json();
    
        return Response.json(data);

      } catch (error) {

        return Response.json({ error: "Error al obtener los datos" }, { status: 500 });
      }
}