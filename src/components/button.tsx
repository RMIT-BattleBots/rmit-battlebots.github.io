'use client'

import { ReactElement } from "react";

export default function Button (input): ReactElement {
    const linkname: string = input.Href ? input.Href : "none" ;
    const butname: string = input.ButName ? input.ButName : "none" ;
    function logConsoleLocal(){

        console.log("Oh hi mark");
    }
    return (
        <a href={linkname} >
            <button onClick={logConsoleLocal} className="bg-red-400 font-black text-gray-800 rounded-3xl px-10 py-3 hover:cursor-pointer transition-all hover:animate-pulse hover:bg-red-300">
                {butname}
            </button>
        </a>
    )
}