import inquirer from 'inquirer'
import fs from 'fs'
import Persona from './Persona.js'
import Carro from "./Carro.js";


function menuPrincipal() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'opcion',
            message: 'Seleccione una opción',
            choices: [
                'Añadir usuario',
                'Buscar usuario',
                'Eliminar usuario',
                'Modificar información de usuario',
            ],
        },
    ])
        .then((respuesta) => {
            const opcion = respuesta.opcion
            switch (opcion) {
                case 'Añadir usuario':
                    anadirCarroUsuario()
                    break
                case 'Buscar usuario':

                    break
                case 'Eliminar usuario':
                    break
                case 'Modificar información de usuario':
                    break
                default:
                    console.log('Opción Inválida')
                    break

            }
        }).catch((error) => {
        console.error('Error al mostrar el menú principal: ', error)
    })
}

async function anadirCarroUsuario(){
    const persona = await solicitarDatos()
    let carro
    do {
        carro = await anadirCarro()
        if (carro === undefined) {
            saveData(persona)
        } else {
            persona.agregarCarro(carro)
        }
    } while (carro !== undefined)
    console.log(persona)
    saveData(persona)
}

async function anadirCarro() {
    const respuestaAnadir = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'carroAnadir',
            message: 'Desea añadir un carro?',
        },
    ])

    if (respuestaAnadir.carroAnadir) {
        const respuestasCarro = await inquirer.prompt([
            {
                type: 'input',
                name: 'placa',
                message: 'Ingrese la placa del carro: ',
            },
            {
                type: 'number',
                name: 'recorrido',
                message: 'Ingrese el recorrido del carro: ',
            },
            {
                type: 'number',
                name: 'numeroPuertas',
                message: 'Ingrese el número de puertas del carro: ',
            },
        ])
        const carro = new Carro(
            respuestasCarro.placa.toUpperCase(),
            respuestasCarro.recorrido,
            respuestasCarro.numeroPuertas
        )
        return carro
    } else {
        return undefined
    }
}

async function solicitarDatos() {
    const respuestas = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese su nombre:',
            },
            {
                type: 'number',
                name: 'edad',
                message: 'Ingrese su edad:',
            },
            {
                type: 'confirm',
                name: 'estadoCivil',
                message: '¿Está casado/a?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese su número de cédula:',
            },
        ])

    const persona = new Persona(
        respuestas.nombre,
        respuestas.edad,
        respuestas.estadoCivil,
        respuestas.id,
    );
    return persona



}


function saveData(persona) {
    try {
        fs.writeFileSync('01-datos.json', JSON.stringify(persona));
        console.log('Datos guardados exitosamente')
    } catch (error) {
        console.error('Error al guardar los datos: ', error)
    }
}

function readData() {
    try {
        const data = fs.readFileSync('data.json', 'utf-8')
        const parsedData = JSON.parse(data)
        return parsedData
    } catch (error) {
        console.error('Error al leer los datos: ', error.message)
    }
}

menuPrincipal()


