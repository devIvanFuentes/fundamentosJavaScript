//CREANDO PROTOTIPO 
const alturaMaxima = 1.8

function Persona(nombre,apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function(){
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto= function(){
	if (this.altura >= alturaMaxima){
		console.log('Soy Alto')
	}else{
		console.log('No soy alto :C')
	}
}


var ivan = new Persona('Ivan','Fuentes',1.90)