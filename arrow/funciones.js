var ivan = {
	nombre: 'Iván',
	edad: '24',
	apellido: 'Fuentes'
}

var aldo = {
	nombre: 'Aldo',
	edad: '15',
	apellido: 'Beltran'
}

const MAYOR_EDAD = 18

/*
var mayoriaDeEdad = function(persona){
	return persona.edad >= MAYOR_EDAD
}
*/


// ARROW FUNCTION

const mayoriaDeEdad = ({ edad }) => edad >= MAYOR_EDAD

const menorDeEdad = ({ edad }) => edad < MAYOR_EDAD 



function esMenorDeEdad(persona){
	if(menorDeEdad(persona)){
		console.log(`${persona.nombre} es menor de edad y NO puede ingresar`)
	}else{
		console.log(`${persona.nombre} es mayor de dedad y SI puede ingresar`)
	}
} 


function esMayorDeEdad(persona){
	if(mayoriaDeEdad(persona)){
		console.log(`${persona.nombre} es Mayor de edad`)
	}else{
		console.log(`${persona.nombre} es Menor de edad`)
	}
}
