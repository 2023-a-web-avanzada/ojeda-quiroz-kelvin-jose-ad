import React, {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EComponenteC from "@/app/f_use_context/components/EComponenteC";

export default function EComponenteB(){
    const contenedorContexto= useContext(ContenedorContext)
    return (
        <>
            <h1>Componente B</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-400 m-2"} onClick={
                e => {
                    e.preventDefault()
                    contenedorContexto.setNombreUsuario('CompB')
                }
            }>
                Actualizar
            </button>
            <br/>
            <EComponenteC></EComponenteC>
        </>
    )

}