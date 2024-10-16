async function getPoke(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokedata = await response.json()
    return pokedata
}

document.addEventListener("DOMContentLoaded", async()=>{
    const specdata = await getPoke("pikachu")
    const picElement = document.getElementById("main1")
    picElement.innerHTML = `<img src= ${specdata.sprites.front_default}>`
    
})