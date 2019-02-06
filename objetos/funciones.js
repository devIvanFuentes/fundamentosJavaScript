/*
var nombre = 'Iván', edad = 23
*/

var ivan = {
	nombre: 'Iván',
	apellido: 'Fuentes',
	edad: 23
}

var arturo = {
	nombre: 'Arturo',
	apellido: 'Gonzalez',
	edad: 25
}

function imprimirEdad(nombre, edad){
	console.log(`${nombre} tiene ${edad} años`)
}

// imprimirEdad('Victor',20)

// SCOPE FUNCIONES

function imprimirNombreMayusculas(persona){

	var nombre = persona.nombre.toUpperCase()
	console.log(nombre)
}

// UTILIZAR SOLO LOS ATRIBUTOS
/*

function imprimirNombreMayusculas( {nombre} ){
	
	console.log(nombre.toUpperCase())
}
*/

imprimirNombreMayusculas(ivan)