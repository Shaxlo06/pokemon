"use strict"

pokemons.forEach(item => {
    pokemons.slice(0, 10)
    let newPokemon = {
        pokemonImg : item.img,
        pokemonName : item.name,
        pokemonCandy : item.candy,
        pokemonWeigth : item.weight,
        pokemonAge : item.candy_count
    }

    let container = document.querySelector(".container")
    let ul = document.querySelector(".pokemons")
    let newFragment =  document.createDocumentFragment();

    let temp = document.querySelector(".template").content.cloneNode(true)
    let pokemonImg = temp.querySelector(".pokemon-img")
    let pokemonName = temp.querySelector(".pokemon-name")
    let pokemonCandy = temp.querySelector(".pokemon-candy")
    let pokemonWeigth = temp.querySelector(".pokemon-weight")
    let pokemonAge = temp.querySelector(".pokemon-age")

    pokemonImg.src = newPokemon.pokemonImg
    pokemonName.innerText = newPokemon.pokemonName
    pokemonCandy.innerText = newPokemon.pokemonCandy
    pokemonWeigth.innerText = newPokemon.pokemonWeigth

     if (newPokemon.pokemonAge == undefined) {
        pokemonAge.innerText == " "
     }else{
        pokemonAge.innerText = `${newPokemon.pokemonAge + " age"}`
     }
    newFragment.appendChild(temp)
    ul.appendChild(newFragment)
});

let heartIcon = document.querySelector(".heart-icon")
heartIcon.addEventListener("click", ()=>{
    heartIcon.classList.toggle("click-icon");
})

