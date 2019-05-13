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
	.then(function(personaje){
		console.log(`El personaje 1 es ${personaje.name}`)
	})
	.catch(onError)





obtenerPersonaje(1, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`)

	
})



// 




