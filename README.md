
# Food Truck Finder

App Web hecha con Next.js que permite encontrar los Food-Truck mas cercanos a la posición del usuario, el cual se asume que se encuentra en la ciudad de San Francisco, EEUU. El usuario puede buscar por comida (palabra clave) o simplemente ver todos los truck que hayan en el radio indicado (en millas).

Como el desafío solicitaba usar tanto Front-End como Back-End, decidí usar Next.js como herramienta ya que me permite aplicar ambas arquitecturas en el mismo proyecto.

La App es de simple funcionamiento, pero también la hice escalable para integrar geolocalización del usuario y adaptabilidad a otras bases de datos de otras ciudades. 


## Front-End

Para el Front-End usé React y TailwindCSS (ya por defecto con Next.js), los cuales me ayudaron a crear componentes reutilizables y de fácil acceso, además de que permiten tener una UI sencilla pero eficaz.


## Back-End

Para el Back-End usé el mismo API Routes de Next.js, el cual permite manejar un Back simple dentro del mismo proyecto, sin necesidad de servidores externos ni lógicas complejas. Como los datos proporcionados se encontraban en formato JSON, decidí que esta era la mejor forma de crear el Back para la App.


## DevOps

En cuanto al deploy de la App, se puede ver el resultado final [acá](https://restaurant-menu-react-eight.vercel.app/), pero si quisieras correrlo en tu equipo, te menciono las librerías y paquetes que usé para su desarrollo:

- **NPM** para instalar las dependencias.
- **Next.js** como framework para el desarrollo full-stack.
- **Leaflet** y **react-leaflet** para la integración y renderizado de un mapa interactivo (y open source ;) ).
- **Vercel** para el despliegue de la aplicación.

### Instalación y Ejecución Local

Para correr el proyecto en tu equipo, sigue estos pasos:

1. Clona el repositorio:

   ```sh
   git clone https://github.com/ValenGu1t0/Food-Truck-Finder
   cd <nombre_del_proyecto>

2. Instala las dependencias:

    npm install

3. Inicia el servidor de desarrollo:

    npm run dev


## Fuentes

La data se obtuvo del siguiente [servicio](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/about_data) perteneciente a la ciudad de San Francisco, el cual habilita un listado de todas las facilidades de comida rapida de la ciudad en formato JSON.

Para el mapa, use el mapa interactivo open source de [leaflet](https://leafletjs.com/), el cual es super facil de instalar y manipular. 

