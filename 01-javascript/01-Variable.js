// 01-Javascript
// 01-varibales.js

// Mutables re asignada
var numeroUno = 1
let numeroDos = 2


numeroUno = 12
numeroDos = 8
numeroUno = false
numeroDos = true

// Inmutable
const configuracionArchivo = 'PDF'
//configuracionArchivo = 'XML'
//vamos a preferir CONST > LET > VAR (mejor no usar a excepción que la librería lo necesite)


// Tipos  de variables
const numero = 1
const sueldo = 1.2
const texto = 'Kelvin'
const apellido = "Ojeda"
const casado = true
const hijos = null
const zapato = undefined

console.log(typeof numero)
console.log(typeof sueldo)
console.log(typeof texto)
console.log(typeof apellido)
console.log(typeof casado)
console.log(typeof hijos)
console.log(typeof zapato)


// truty and falsy
if(true){
    console.log("Verdadero")
}else{
    console.log("Falsedad")
}
if(""){// String vacio
    console.log("Verdadero")
}else{
    console.log("Falsedad") // falsy
}
if("Adrian"){
    console.log("Verdadero") //Truety
}else{
    console.log("Falsedad")
}

//Numeros
console.log("\nNumeros")
if(-1){
    console.log("Verdadero") // Trurty
}else{
    console.log("Falsedad")
}
if(0){// 0
    console.log("Verdadero")
}else{
    console.log("Falsedad") // falsy
}
if(1){
    console.log("Verdadero") //Truety
}else{
    console.log("Falsedad")
}

// Null and undefiened
if(null){
    console.log("Verdadero")
}else{
    console.log("Falsedad") //falsy
}

if(undefined){
    console.log("Verdadero")
}else{
    console.log("Falsedad") //falsy
}



//Objetos

const kelvin ={
    nombre: 'Kelvin',
    apellido: 'Ojeda',
    edad: 21,
    hijos: null,
    casado: true,
    zapato : undefined,
    ropa:{
        color: 'Plomo',
        talla: '40'
    },
    mascota:['Cache', 'Pequi', 'Pandi']
}

console.log(kelvin)


// Acceder a las propiedad
kelvin.nombre //= "Kelvin"
kelvin.apellido //= "Ojeda"
kelvin["nombre"]// = "Kelvin"

//Modificar valores
kelvin.nombre = "Jose"
kelvin["nombre"]= "Kevin"
// Crear atributos
kelvin.sueldo //undefined
console.log(kelvin.sueldo)


kelvin.sueldo = 443
console.log(kelvin.sueldo)

kelvin["gastos"]=0.8
console.log(kelvin.gastos)

console.log("\n Despues de modificar la informacion y crear el campo sueldo")
console.log(kelvin)

//Eliminar propiedades
console.log("\nEliminar propiedades")
kelvin.nombre = undefined
console.log(kelvin)
console.log(Object.keys(kelvin))
console.log(Object.values(kelvin))
delete kelvin.nombre
console.log(Object.keys(kelvin))
console.log(Object.values(kelvin))
