var x = 4, y = '4'

x == y //True debiado a que js los convierte al mismo tipo de dato
x === y //False debiado a que uno es entero y el otro string

//comparando objetos

var ivan = {
	nombre: 'Ivan'
}

var otraPersona = {
	nombre: 'Ivan'
}


ivan == otraPersona //false
ivan === otraPersona //false

var persona = ivan

ivan == persona //true

