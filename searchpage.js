/*document.getElementById("mybutton").addEventListener("click", async(event)=>{
    event.preventDefault()
    const Pokename = document.getElementById("pokesearch").value
    console.log(`${Pokename}`)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokename}`)
    const pokedata = await response.json()
    console.log(pokedata)
})*/




async function getPokemon(Pokename){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokename}`)
    const pokedata = await response.json()
    return pokedata    
}

document.getElementById("mybutton").addEventListener("click", async(event) => {
    event.preventDefault()
    const newpoke = await document.getElementById("pokesearch").value
    const newpokedata = await getPokemon(newpoke)
    const pictureElement = document.getElementById("main1")
    const infoElement = document.getElementById("main2")
    pictureElement.innerHTML = `<img src="${newpokedata.sprites.front_default}" alt="${newpokedata.name}">
                                <h4>Abilities:</h4>
                                <ul>
                                <li>${newpokedata.abilities[0].ability.name}</li>
                                <li>${newpokedata.abilities[1].ability.name}</li>
                                </ul>`
    infoElement.innerHTML = `<h2>Name: ${newpokedata.name}</h2>
                            <h4>Base experience: <br> ${newpokedata.base_experience}</h4>
                            <img src="${newpokedata.sprites.back_default}" alt="${newpokedata.name}">`
    console.log(`${newpokedata.name}`)
})