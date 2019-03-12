var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
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




