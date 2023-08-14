'use client'


import {io} from "socket.io-client";
import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/MensajeChatProps";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MensajeChat from "@/app/k_websockets/components/MensajeChat";
import {FormularioModelo} from "@/app/k_websockets/types/FormularioModelo";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);
export default function Page() {
    const [isConnected, setIsConnected] = useState(socket.connect())
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[])
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm(
        {
            defaultValues: {
                salaId: '',
                nombre: '',
                mensaje: '',
            },
            mode: 'all'
        }
    )
    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });

            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                console.log('escucharEventoHola', data);
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [
                    ...mensajesAnteriores,
                    nuevoMensaje]
                );
            });

            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [
                    ...mensajesAnteriores,
                    nuevoMensaje]
                );
            });

            socket.on('escucharEventoMensajeSala', (data: FormularioModelo) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + ' - ' + data.mensaje,
                    nombre: data.nombre,
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [
                    ...mensajesAnteriores,
                    nuevoMensaje]
                );
                console.log('escucharEventoMensajeSala')
            });
        },
        []
    )

    const estaConectado = () => {
        if (isConnected) {
            return <span>Conectado :)</span>
        } else {
            return <span>Desconectado :(</span>
        }
    }

    const unirseSalaOEnviarMensajeSala = (data: FormularioModelo) => {
        if (data.mensaje === '') {
            const dataEventoUnirSala = {
                salaId: data.salaId,
                nombre: data.nombre
            }

            socket.emit(
                'unirseSala', //Nombre del eventos
                dataEventoUnirSala, // Datos del evento
                () => {
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: 'Bienvenido a la sala ' + dataEventoUnirSala.salaId,
                        nombre: 'Sistemas',
                        posicion: Posicion.I
                    }
                    setMensajes((mensajesAnteriores) => [
                        ...mensajesAnteriores, nuevoMensaje]
                    )
                }
            )
        } else {
            const dataEventoEnviarMensajeSala = {
                salaId: data.salaId,
                nombre: data.nombre,
                mensaje: data.mensaje
            }
            socket.emit(
                'enviarMensaje',
                dataEventoEnviarMensajeSala,
                () => {
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: data.salaId + ' - ' + data.mensaje,
                        nombre: data.nombre,
                        posicion: Posicion.D
                    }
                    setMensajes((mensajesAnteriores) => [
                        ...mensajesAnteriores, nuevoMensaje]
                    )
                }
            )
        }
    }

    const enviarEventoHola = () => {
        const mensaje = {mensaje: 'Kelvin'}
        socket.emit(
            'hola', // Nombre Evento
            mensaje, //  Datos evento
            (datosEventoHola: { mensaje: string; }) => {
                // Callback o respuesta del evefnto
                console.log(datosEventoHola)
                //     const [arreglo, setArreglo] = useState([1,2])
                //      setArreglo( [1,2,3] )
                //      setArreglo( ([1,2])=> [ ...[1,2], 3 ])
                const nuevoMensaje: MensajeChatProps = {
                    ...mensaje,
                    nombre: 'emisorKelvin',
                    posicion: Posicion.D
                };
                setMensajes(
                    (mensajesAnteriores) => [
                        ...mensajesAnteriores,
                        nuevoMensaje
                    ]);
            }
        )
        console.log(mensaje)
    }


    return (
        <>
            <h1>Websockets</h1>
            <p><strong>{estaConectado()}</strong></p>
            <button className={'btn btn-success'}
                    onClick={() => enviarEventoHola()}>
                Enviar evento hola
            </button>
            <div className="row">
                <div className={"col-sm-6"}>
                    <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeSala)}
                         className={"border-2 border-pink-50 p-4 m-2"}
                    >
                        <div className={"mb-3"}>
                            <label htmlFor="salaId" className={"form-label"}>Sala ID</label>
                            <input type={"text"}
                                   className={"form-control"}
                                   placeholder={"Ejm: 1, 2, 3"}
                                   id={"salaId"}
                                   {
                                       ...register('salaId', {required: 'Ingresar a la sala'})
                                   }
                                   aria-describedby={"salaIdHelp"}/>
                            <div id={"salaIdHelp"} className={"form-text"}>
                                Ingresa tu SalaId
                            </div>
                            {errors.salaId &&
                                <div className={"alert alert-warming"} role={"alert"}>
                                    Tiene errores {errors.salaId.message}
                                </div>
                            }
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="nombre" className={"form-label"}>Nombre</label>
                            <input type={"text"}
                                   className={"form-control"}
                                   placeholder={"Ejm: Kelvin"}
                                   id={"nombre"}
                                   {
                                       ...register('nombre', {required: 'Nombre requerido'})
                                   }
                                   aria-describedby={"nombreHelp"}/>
                            <div id={"nombreHelp"} className={"form-text"}>
                                Ingresa tu Nombre
                            </div>
                            {errors.nombre &&
                                <div className={"alert alert-warming"} role={"alert"}>
                                    Tiene errores {errors.nombre.message}
                                </div>
                            }
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor="mensaje" className={"form-label"}>Mensaje</label>
                            <input type={"text"}
                                   className={"form-control"}
                                   placeholder={"Ejm: Hola que tal"}
                                   id={"mensaje"}
                                   {
                                       ...register('mensaje', {required: 'Mensaje requerido'})
                                   }
                                   aria-describedby={"mensajeHelp"}/>
                            <div id={"mensajeHelp"} className={"form-text"}>
                                Ingresa tu Mensaje
                            </div>
                            {errors.mensaje &&
                                <div className={"alert alert-warming"} role={"alert"}>
                                    Tiene errores {errors.mensaje.message}
                                </div>
                            }
                        </div>
                        <button type={"submit"} disabled={!isValid} className={"btn btn-warning mr-4"}>
                            Unirse sala
                        </button>
                        <button type={"reset"} className={"btn btn-danger"}>
                            Reset
                        </button>

                    </form>
                </div>


                <div className="col-sm-6 ">
                    <div className="border-2 border-sky-500 p-4 m-2">
                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat key={indice}

                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}