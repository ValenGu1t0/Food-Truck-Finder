"use-client"

import FormularioBusqueda from './ui/formulario/FormularioBusqueda';
import Mapa from './ui/mapa/Mapa'

export default function Home() {

    return (

      <div className="flex flex-col-reverse w-full md:flex-row lg:flex-row">

        <div className="w-full p-8 flex justify-center items-center md:w-2/3">
          <Mapa />
        </div>
        
        <div className="w-full pt-8 px-8 text-black flex justify-center items-center md:w-1/3 md:pt-0 lg:pt-0">
          <FormularioBusqueda />
        </div>
        
      </div>

    );
}