
const obtenerPokemon = require("./library");

// Codigo funcion callback

function extraerHabilidades(pokemon){
    pokemon.abilities.forEach(habilidad => console.log(habilidad.ability.name));
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido
let pokemon = "ludicolo";
obtenerPokemon(pokemon,extraerHabilidades);

