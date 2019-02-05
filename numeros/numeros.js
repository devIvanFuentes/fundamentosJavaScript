var edad = 23

edad += 1

var peso = 75
var sandwich = 1

peso = peso - sandwich

// peso -= sandwich

// La manera de almacenar decimales no es muy precisa en JS

var precioVino = 200.3
var total = precioVino * 3

// var total = Math.round(precioVino * 100 *3) / 100
var totalStr = total.toFixed(3)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var totalPorciones = pizza / personas