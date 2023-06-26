import {Moneda} from "@/app/e_custom_hook/interfaces/moneda";
import {useState} from "react";

export default function useSelectMoneda(
    label: string,
    opciones: Moneda
){
    const [moneda, setMoneda] = useState('')
    const UseSelectMoneda = (
        <>
        </>
    )
    return [moneda, UseSelectMoneda]
}