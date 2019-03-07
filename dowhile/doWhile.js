var contador = 1

const llueve = () => Math.random() < 0.25

do{

	contador++

}while(!llueve())

if(contador === 1 ){
	console.log(`Fui a ver si llovia ${contador} vez`)
	// var frecuencia = contador===1 ? "vez":"veces";
	/*
		El signo de interrogación es conocido como operador ternario y es una forma abreviada de un if, por así decirlo.
	*/
	
}else{
	console.log(`Fui a ver si llovia ${contador} veces`)
	
}
