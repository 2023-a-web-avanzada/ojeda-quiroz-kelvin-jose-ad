import {Dispatch, SetStateAction} from "react";

// export interface ContenedorContextObjecto {
//     nombreUsario: string;
//     setNombreUsuario: Dispatch<SetStateAction<string>>;
// }

export interface ContenedorContextObjeto {
    nombreUsuario:string;
    setNombreUsuario: Dispatch<SetStateAction<string>>;
}