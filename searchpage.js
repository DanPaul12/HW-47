
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    const input = document.getElementById("pokesearch")
    const Pokename = input.value
    console.log(Pokename)
})



/*async function getPokemon(Pokename){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokename}`)
    const pokedata = await response.json()
    console.log(pokedata)
}*/