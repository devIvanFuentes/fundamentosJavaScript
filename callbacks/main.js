const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts =  { crossDomain:true }

const onPeopleResponse =  function(persona){
	console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id){

	return new Promise((resolve,reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
		$
			.get(url, opts,function(data){
				resolve(data)
			})
			.fail(()=>reject(id))
		})

}

function onError(id){
	console.log(`Sucedio un error al conseguir el personaje ${id}`)
}

obtenerPersonaje(1)
	.then(personaje => {
		console.log(`El personaje 1 es ${personaje.name}`)
		return obtenerPersonaje(2)
	})
	.then(personaje =>{
		console.log(`El personaje 2 es ${personaje.name}`)
		return obtenerPersonaje(3)

	})
	.then(personaje =>{
		console.log(`El personaje 3 es ${personaje.name}`)
		return obtenerPersonaje(4)
	})
	.then(personaje =>{
		console.log(`El personaje 4 es ${personaje.name}`)
		return obtenerPersonaje(5)})
	.catch(onError)





obtenerPersonaje(1, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`)

	
})