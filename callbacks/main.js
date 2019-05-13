const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts =  { crossDomain:true }

const onPeopleResponse =  function(persona){
	console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id,callback){
	console.log(id)
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	
		$
			.get(url, opts,callback)
			.fail(() => {
				console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
		})



}

obtenerPersonaje(1, function(personaje){
	console.log(`Hola, yo soy ${personaje.name}`)

	obtenerPersonaje(2, function(personaje){
		console.log(`Hola, yo soy ${personaje.name}`)

		obtenerPersonaje(3,function(personaje){
			console.log(`Hola, yo soy ${personaje.name}`)

			obtenerPersonaje(4,function(personaje){
				console.log(`Hola, yo soy ${personaje.name}`)

				obtenerPersonaje(5,function(personaje){
					console.log(`Hola, yo soy ${personaje.name}`)

					obtenerPersonaje(6,function(personaje){
						console.log(`Hola, yo soy ${personaje.name}`)

						obtenerPersonaje(7, function (personaje){
							console.log(`Hola, yo soy ${personaje.name}`)
						})
					})
				})
			})
		})
	})
})



// 




