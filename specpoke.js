async function getPoke(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokedata = await response.json()
    return pokedata
}

document.addEventListener("DOMContentLoaded", async()=>{
    const specdata = await getPoke("pikachu")
    const picElement = document.getElementById("main1")
    const infoElement = document.getElementById("main2")
    picElement.innerHTML = `<img src= ${specdata.sprites.other.home.front_default}>`
                            `<img src= ${specdata.sprites.other.official-artwork.front_default}>`
    infoElement.innerHTML = `<h2>Name: ${specdata.name}</h2>
                            <h4>Moves:</h4>
                            <ul>
                                ${specdata.moves.map(move => `<li>${move.move.name}</li>`).join('')}
                            </ul>
                            <h4>Abilities:</h4>
                            <ul>
                                <li>${specdata.abilities[0].ability.name}</li>
                                <li>${specdata.abilities[1].ability.name}</li>
                            </ul>`
    
})