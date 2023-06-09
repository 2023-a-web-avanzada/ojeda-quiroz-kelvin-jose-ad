import inquirer from 'inquirer'
import fs from 'fs'
class Carro {
    constructor(placa, recorrido, numeroPuertas, inicialPlaca) {
        this.placa = placa;
        this.recorrido = recorrido;
        this.numeroPuertas = numeroPuertas;
        this.esNuevo = recorrido === 0;
        this.inicialPlaca = placa.split("")[0];
    }
}

class Persona {
    constructor(nombre, edad, estadoCivil, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.id = id;
        this.carros = [];

    }
    agregarCarro(carro) {
        this.carros.push(carro);
    }
}

function agregarCarro(persona, carro) {
    persona.carros.push(carro);
}


function solicitarDatos() {
    inquirer
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
            {
                type: 'input',
                name: 'placa',
                message: 'Ingrese la placa del carro:',
            },
            {
                type: 'number',
                name: 'recorrido',
                message: 'Ingrese el recorrido del carro:',
            },
            {
                type: 'number',
                name: 'numeroPuertas',
                message: 'Ingrese el número de puertas del carro:',
            },
        ])
        .then((respuestas) => {
            const persona = new Persona(
                respuestas.nombre,
                respuestas.edad,
                respuestas.estadoCivil,
                respuestas.id,
            );

            const carro = new Carro(
                respuestas.placa,
                respuestas.recorrido,
                respuestas.numeroPuertas
            );

            persona.agregarCarro(carro);

            // Guardar los datos en el archivo JSON
            fs.writeFileSync('data.json', JSON.stringify(persona));

            console.log('Datos guardados exitosamente.');
        })
        .catch((error) => {
            console.error('Error al solicitar los datos:', error);
        });
}
solicitarDatos();

