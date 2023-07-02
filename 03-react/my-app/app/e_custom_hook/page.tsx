'use client'
import useSelectMoneda from "@/app/e_custom_hook/hooks/useSelectMoneda";
import {MonedasConst} from "@/app/e_custom_hook/const/monedas.const";
import {useEffect} from "react";

export default function page(){
    const [moneda, UseSelectMonedas] = useSelectMoneda('Moneda global', MonedasConst)
    useEffect(
        ()=>{
            console.log(moneda)
        },
        [moneda]
    )
    return (
        <>
            {UseSelectMonedas}
        </>
    )
}