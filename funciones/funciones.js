var nombre = 'Iván', edad = 23

function imprimirEdad(nombre, edad){
	console.log(`${nombre} tiene ${edad} años`)
}

// imprimirEdad('Victor',20)

// SCOPE FUNCIONES

function imprimirNombreMayusculas(){

	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreMayusculas()