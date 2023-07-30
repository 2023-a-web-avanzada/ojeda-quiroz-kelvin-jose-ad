import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/MensajeChatProps";

export default function MensajeChat(props: MensajeChatProps) {
    // const {nombre, mensaje, posicion} = props
    // return(
    //     <>
    //     posicion === Posicion.D ?
    //         <p className={'text-right'}>
    //             {mensaje}<strong>: {nombre}</strong>
    //         </p> :
    //         <p className={'text-left'}>
    //             <strong>{mensaje}</strong>: {nombre}
    //         </p>
    //     </>
    // )
    const {nombre, mensaje, posicion} = props
    return (
        <>
            {
                posicion === Posicion.D ?
                    <p className='text-right'>
                        {mensaje}<strong>:{nombre}</strong>
                    </p> :
                    <p className='text-left'>
                        <strong>{nombre}:</strong>{mensaje}
                    </p>
            }
        </>)
}