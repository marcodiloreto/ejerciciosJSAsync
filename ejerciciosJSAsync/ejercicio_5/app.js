
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function mostrarPersona(persona){
    individuo = persona.results[0];
    console.log("Genero: "+individuo.gender);
    console.log("Nombre: "+individuo.name.title +" "+ individuo.name.first +" "+ individuo.name.last);
    console.log("Pais: "+individuo.location.country+"; Estado: "+individuo.location.state+"; Ciudad: "+individuo.location.city+"; Calle: "+individuo.location.street.name+" "+individuo.location.street.number
    +"; Postal: "+individuo.location.postcode);
    console.log("Email: "+individuo.email);
    console.log("Username: "+individuo.login.username);
    console.log("Constraseña: "+individuo.login.password);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(mostrarPersona);
