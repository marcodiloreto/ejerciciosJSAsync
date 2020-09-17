
const obtenerChiste = require("./library");

// Codigo funcion callback

function funcionCallback(algo) {
    chiste = algo[0];
    console.log(chiste.setup);
    console.log(chiste.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);
