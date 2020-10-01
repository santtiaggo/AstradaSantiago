const obtenerPokemon = require("./library");


obtenerPokemon("charmeleon").then(verPokemon => {
    verPokemon.abilities.forEach(habilidad => console.log("Charmeleon: " + habilidad.ability.name));
}).catch((err)=>{
    console.log('Habilidad no encontrada');
});