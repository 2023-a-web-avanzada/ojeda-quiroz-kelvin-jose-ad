import {useState} from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}

export default function CComponente(
    props: PropiedadesComponente
) {
    let {url, iteraciones, mostrar} = props
    const contenidoAdicional = () => {
        if (mostrar) {
            return <p>Mostrar</p>
        }
        return <p>Ocultar</p>
    }
    const arreglo = [0, 1]
    // const valorArregloSeleccionado = arreglo[0]
    // const valorArregloSeleccionado02 = arreglo[1]
    // Para ahorrarnos lineas código
    const [valor01, valor02] = arreglo
    const objeto = {}

    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones
    )

    const color = "bg-red-400 border-solid border"
    const [colorLocal, setColorLocal] = useState(
        color
    )


    return (
        <div className={"border border-solid border-black m-2 p-2"}>

            <a href={url} target="_blank">IR A URL</a>
            <p className={colorLocal}>Iteracion: {iteraciones} {iteracionLocal}</p>
            <p>Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            {/*{mostrar ?<p>Mostrar con if contraido</p>:<p>Ocultar con if contraido</p>}*/}
            {mostrar && <p>Mostrar rápido</p>}
            <button className={"bg-blue-400 border-solid border"} onClick={
                (event) => {
                    console.log(event)
                    iteraciones += 1
                    console.log(iteraciones)
                    setIteracionLocal(iteracionLocal + 1)
                    if(colorLocal === "bg-yellow-400 border-solid border") {
                        setColorLocal("bg-red-400 border-solid border")
                    }else {
                        setColorLocal("bg-yellow-400 border-solid border")
                    }

                }
            }>Imprimir evento
            </button>

        </div>

    )
}