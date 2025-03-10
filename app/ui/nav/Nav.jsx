'use client'

import { useState } from "react";
import Link from "next/link";

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="flex flex-row justify-between items-center w-full bg-purple-950 px-4 relative">
        
            <Link href="/"><h2 className="text-xl font-bold font-mono italic p-4">FOOD-FINDER</h2></Link>

            <button className="sm:hidden p-3 text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
                <i className="fas fa-bars text-xl"></i>
            </button>

                <ul className={`${ isOpen ? "flex" : "hidden" } flex-col sm:flex sm:flex-row absolute sm:static top-full left-0 w-full sm:w-auto bg-purple-900 sm:bg-transparent shadow-md sm:shadow-none`} >
                    
                    <Link href="/" className="p-5 font-medium hover:bg-purple-700 hover:text-white text-center transition duration-200">
                        <li className="font-sans">Home</li>
                    </Link>

                    <Link href="/about" className="p-5 font-medium hover:bg-purple-700 hover:text-white text-center transition duration-200">
                        <li className="font-sans">About</li>
                    </Link>

                    <a href="https://github.com/ValenGu1t0/Food-Truck-Finder" target="_blank" rel="noopener noreferrer" 
                    className="p-5 font-medium hover:bg-purple-700 hover:text-white text-center transition duration-200">
                        <li className="font-sans">GitHub</li>
                    </a>
                </ul>

        </nav>
    );
}