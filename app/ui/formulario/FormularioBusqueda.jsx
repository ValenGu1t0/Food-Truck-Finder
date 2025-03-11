'use client'

import {useState} from "react";

/* Obtenemos la funcion que actualiza el estado desde Home */
export default function FormularioBusqueda( { handleSubmit } ) {

    /* Estado para transicion de Card Intro -> Card Form */
    const [showForm, setShowForm] = useState(false);

    /* Estados iniciales de los inputs */
    const [meal, setMeal] = useState("");
    const [radius, setRadius] = useState(10);

    /* Pasamos el input de usuario para la request inicial al Back-End */
    const handleSubmitForm = (e) => {

        e.preventDefault();
        handleSubmit(meal, radius); 
    };
    
    return (

        <div>{!showForm ? 
        (
            
            <div className="flex flex-col justify-center items-start p-8 gap-6 bg-purple-600 rounded-xl shadow-2xl transition-all duration-500">
                <h2 className="font-mono text-2xl font-semibold text-indigo-950">Welcome to Food-Finder!</h2>
                <p className="font-sans text-md text-slate-100 text-justify">Discover the best food-trucks in <strong className="text-indigo-950">San Francisco</strong>! Type the kind of meal you want and set a distance range.</p>
                <p className="font-sans text-md text-slate-100 text-justify">If you want to see any type of food near you directly, just hit Search!</p>


                <button onClick={() => setShowForm(true)} 
                className="font-sans bg-purple-800 text-white font-semibold border-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-purple-950 hover:border-black transition duration-200 ease-in-out">
                    Start Searching
                </button>
            </div>
            
        ) : (

            <form onSubmit={handleSubmitForm} className="flex flex-col justify-center items-start p-8 gap-6 bg-purple-600 rounded-xl shadow-2xl">

                <h2 className="font-mono text-2xl font-semibold text-indigo-950">Find your perfect Food-Truck!</h2>

                <div className="flex flex-col justify-center items-start gap-1 w-full">
                    <label htmlFor="meal" className="text-lg font-sans">
                        What kind of meal would you like?
                    </label>
                    <input id="meal" type="text" value={meal} onChange={(e) => setMeal(e.target.value)} placeholder="Only if you're looking for something special." 
                    className="p-2 w-full bg-gray-100 border border-white rounded-lg focus:border-purple-950 focus:outline-none"  />
                </div>

                <div className="flex flex-col justify-center items-start gap-2 w-full">

                    <label htmlFor="miles" className="text-lg font-sans">
                        Search Radius (Mi)
                    </label>

                    <input id="miles" type="range" min="1" max="5" value={radius} onChange={(e) => setRadius(e.target.value)} 
                    className="w-full h-2 bg-purple-300 rounded-lg cursor-pointer accent-purple-950 appearance-none" /> 
                
                    <div className="w-full flex justify-between text-md">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    </div>

                </div>

                <button type="submit" className="w-full bg-purple-800 rounded-lg font-semibold text-white border-2 border-white cursor-pointer p-2 hover:bg-purple-950 hover:border-black transition duration-200 ease-in-out">
                    Search
                </button>

            </form>
            
        )
        }</div>
    )
}