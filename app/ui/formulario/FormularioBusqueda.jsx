"use-client";

export default function FormularioBusqueda() {

  return (

    /* onSubmit={handleSubmit(onSubmit)} */

    <form className="flex flex-col justify-center items-start p-8 border gap-6 bg-purple-600 rounded-xl">

        <h2 className="text-2xl font-semibold text-indigo-950">Find your perfect Food-Truck!</h2>

        <div className="flex flex-col justify-center items-start gap-1 w-full">
            <label htmlFor="meal">What kind of meal would you like?</label>
            <input id="meal" className="p-2 w-full bg-gray-100 border border-black rounded-lg focus:border-purple-950 focus:outline-none" type="text" placeholder="Burritos, Tacos.." />
        </div>

        <div className="flex flex-col justify-center items-start gap-2 w-full">

          <label htmlFor="miles">Miles of Distance (mi)</label>

          <input id="miles" type="range" min="1" max="20" className="w-full cursor-pointer h-2 bg-purple-300 rounded-lg accent-purple-950 appearance-none"
            /* value={radius} onChange={(e) => setRadius(e.target.value)} */  /> 
            
          <div className="w-full flex justify-between text-md">
            <span>1</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
          </div>

        </div>

        <button className="w-full bg-purple-800 rounded-lg font-semibold border-2 cursor-pointer p-2 hover:bg-purple-950 hover:border-black hover:text-white transition duration-200 ease-in-out">Search</button>

    </form>

  )
  
}