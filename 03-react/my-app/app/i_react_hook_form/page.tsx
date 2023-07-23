'use client'
import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FormularioEjemplo} from "@/app/i_react_hook_form/types/formulario-ejemplo";


export default function Page() {
    const [nombre, setNombre] = useState('Kelvin')
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
        control
    } = useForm(
        {
            defaultValues: {
                nombre: 'Kelvin',
                estadoCivil: ''
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }

    return (
        <>
            <div className="container">
                <h1>Formulario conreact hook form</h1>
                <form onSubmit={handleSubmit(controladorSubmit)}>
                    <div className={"mb-3"}>
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="EJ: Kelvin" id="nombre"
                               {
                                   ...register('nombre', {
                                       required: {
                                           value: true,
                                           message: 'Nombre requerido'
                                       },
                                       maxLength: {value: 20, message: 'Longitud maxima de 20'},
                                       minLength: {value: 5, message: 'Longitud minima de 5'},
                                       validate: {
                                           soloNumeros: (valorActual) => {
                                               if (Number.isNaN(+valorActual)) {
                                                   return 'Ingrese solo numeros'
                                               } else {
                                                   return true
                                               }
                                           }
                                       }
                                   })
                               }
                        />
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre
                        </div>
                        {
                            errors.nombre && <div className="alert alert-warning" role={"alert"}>
                                Tienes errores {errors.nombre.message}
                            </div>
                        }

                    </div>
                    <div className="mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="estadoCivilLabedId">
                                Estado Civil
                            </InputLabel>
                            <Controller
                                control={control}
                                rules={{required: {value: true, message: 'Estado C. requerido'}}}
                                name="estadoCivil"
                                render={
                                    ({field: {onChange, value, onBlur,}})=>{
                                        return(
                                            <>
                                                <Select
                                                    labelId="estadoCivilLabelId"
                                                    id="estadoCivil"
                                                    label={"Estado Civil"}
                                                    onBlur={onBlur}
                                                    value = {value}
                                                    onChange={onChange as any}
                                                    >
                                                    <MenuItem value ={'casado'}>Casado</MenuItem>
                                                    <MenuItem value ={'soltero'}>Soltero</MenuItem>
                                                </Select>
                                            </>
                                        )
                                    }

                                }/>
                            {
                                errors.estadoCivil && <div className="alert alert-warning" role={"alert"}>
                                    Tienes errores {errors.estadoCivil.message}
                                </div>
                            }
                        </FormControl>
                    </div>
                    <Button
                        type="submit"
                        disabled={!isValid}
                        variant="outlined">
                        Submit
                    </Button>
                </form>
            </div>

        </>
    )
}