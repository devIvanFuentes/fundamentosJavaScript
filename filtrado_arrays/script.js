var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 30
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros:33
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 45
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 32
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros:98
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 423
}


var personas = [sacha, alan, martin, dario, vicky, paula]


const esAlta = persona => persona.altura > 1.8


var personasAlta = personas.filter(esAlta)

console.log(personasAlta)


//PERSONAS BAJAS
const estaturaMinima = 1.8
const esBaja = persona => persona.altura < estaturaMinima

var pesronasBajas = personas.filter(esBaja)

console.log(pesronasBajas) 



// CAMBIAR DE DE MTS A CM

const pasarAlturaAcms = persona =>({    
    ...persona,
    altura: persona.altura * 100  
})

 /*


const pasarAlturaAcms = persona =>{
    
    return {
        ...persona,
        altura: persona.altura * 100
    }  
}

*/

var personasCms = personas.map(pasarAlturaAcms)

console.log(personasCms)


// REDUCE

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`El Total de libros es: ${totalDeLibros}`)


