import React, {useContext, useEffect} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EComponenteB from "@/app/f_use_context/components/EComponenteB";

export default function EComponenteA() {
    const contenedorContexto = useContext(ContenedorContext)
    useEffect(
        ()=>{
            console.log(
                'Cambio nombre usuario', contenedorContexto.nombreUsuario
            )
        },
        [contenedorContexto.nombreUsuario]
    )
    return (
        <>
            <h1>Componente A</h1>
            <p>{contenedorContexto.nombreUsuario}</p>
            <button className={"bg-blue-400 m-2"} onClick={
                e => {
                    e.preventDefault()
                    contenedorContexto.setNombreUsuario('CompA')
                }
            }>
                Actualizar
            </button>
            <br/>
            <EComponenteB></EComponenteB>
        </>
    )
}