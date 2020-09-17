
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then((algo) => {
    chiste = algo[0];
    console.log(chiste.setup);
    console.log(chiste.punchline);
})
