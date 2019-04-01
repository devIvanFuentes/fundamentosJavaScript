class Persona {

	constructor (nombre, apellido, altura){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(){
		return console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
	}

}

class Developer extends Persona{

	constructor (nombre, apellido, altura){
		super(nombre,apellido,altura)

	}

	despedida(){
		console.log(`Adios ATT: ${this.nombre} ${this.apellido}`)
	}

}


var ivan = new Persona('Ivan','Fuentes', 1.73)

var aldo = new Developer('Aldo', 'Gonzalez', 1.80)