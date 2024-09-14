async function getAPI(url) {
	if (url in localStorage) return JSON.parse(localStorage[url])
	
	const response = await fetch(url)
	const json = await response.json()
	localStorage[url] = JSON.stringify(json)
		
	return json

}

async function setPokemon(url, id, pokemonName) {
	const div = document.getElementById(id)
	const data = await getAPI("https://pokeapi.co/api/v2/pokemon/" + id)
	const html = []
	html.push(`<p>${pokemonName}`)
	html.push(` #${data.id}</p>`)
	for (const typeObject of data.types) {
		const typeData = await getAPI(typeObject.type.url)
		html.push(`<img src="${typeData.sprites['generation-iii'].emerald.name_icon}">`)
	}
	html.push(`<br><img src="${data.sprites.other["official-artwork"].front_default}" height=100>`)
	div.innerHTML = html.join("")
}
async function main() {
	const generation1 = await getAPI("https://pokeapi.co/api/v2/generation/1")
	console.log(generation1)
	
	let html = []
	html.push("<ul>")
	for (const pokemon of generation1.pokemon_species) {
		let name = pokemon.name
		//Make the nidoran genders in parenthesis
		name = name.replace("-m", " (M)"). replace("-f", " (F)")
		//Make the first letter Uppercase
		name = name[0].toUpperCase() + name.substring(1)
		//Add list element
	    html.push(`<li><a href='javascript:setPokemon("${pokemon.url}","${pokemon.name}","${name}")'>${name}</a><div id="${pokemon.name}"></div></li>`)
		
	}
	html.push("</ul>")
	
	const output = document.getElementById("output")
	output.innerHTML = html.join("")
}
main()