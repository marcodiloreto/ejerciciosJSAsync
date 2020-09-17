
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("ludicolo").then(pokemon => {
    pokemon.abilities.forEach(habilidad => console.log(habilidad.ability.name));
})
