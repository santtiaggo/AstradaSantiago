const obtenerPokemon = require("./library");

let nombrePokemon = "charmander";

let verPokemon = function(pokemon){
    console.log(pokemon.name);
    console.log("Habilidades:");
    pokemon.abilities.forEach(habilidad => {
        console.log("."+ habilidad.ability.name);
    });
    
}

obtenerPokemon(nombrePokemon,verPokemon);