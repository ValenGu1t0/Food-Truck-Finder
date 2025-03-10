'use client'

import {useState} from "react";

/* Obtenemos la funcion que actualiza el estado desde Home */
export default function FormularioBusqueda( { handleSubmit } ) {

    /* Estados iniciales de los inputs */
    const [meal, setMeal] = useState("");
    const [radius, setRadius] = useState(10);

    /* Pasamos el input de usuario para la request inicial al Back-End */
    const handleSubmitForm = (e) => {

        e.preventDefault();
        handleSubmit(meal, radius); 
    };
    
    return (

        <form onSubmit={handleSubmitForm} className="flex flex-col justify-center items-start p-8 border gap-6 bg-purple-600 rounded-xl">

            <h2 className="text-2xl font-semibold text-indigo-950">Find your perfect Food-Truck!</h2>

            <div className="flex flex-col justify-center items-start gap-1 w-full">
                <label htmlFor="meal" className="text-lg">
                    What kind of meal would you like?
                </label>
                <input id="meal" type="text" value={meal} onChange={(e) => setMeal(e.target.value)} placeholder="Burritos, Tacos.." 
                className="p-2 w-full bg-gray-100 border border-black rounded-lg focus:border-purple-950 focus:outline-none"  />
            </div>

            <div className="flex flex-col justify-center items-start gap-2 w-full">

                <label htmlFor="miles" className="text-lg">
                    Miles of Distance (Mi)
                </label>

                <input id="miles" type="range" min="1" max="5" value={radius} onChange={(e) => setRadius(e.target.value)} 
                className="w-full h-2 bg-purple-300 rounded-lg cursor-pointer accent-purple-950 appearance-none" /> 
            
                <div className="w-full flex justify-between text-md">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                </div>

            </div>

            <button type="submit" className="w-full bg-purple-800 rounded-lg font-semibold border-2 cursor-pointer p-2 hover:bg-purple-950 hover:border-black hover:text-white transition duration-200 ease-in-out">
                Search
            </button>

        </form>
    )
}