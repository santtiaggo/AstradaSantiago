const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function obtenerD(datos){
    let humano = datos.results[0];
    console.log(humano.name.title+" "+humano.name.first+" "+humano.name.last);
    console.log("Genero: " +humano.gender);
    console.log("Pais: " +humano.location.country+" "+ "Estado: " +humano.location.state+" "+ "Ciudad: " +humano.location.city+"\n"+ "Calle: " +humano.location.street.name+" "+ "Numero: " +humano.location.street.number+" "+ "Codigo postal: " +humano.location.postcode);
    console.log("Email: " + humano.email);
    console.log("Username: " + humano.login.username);
    console.log("Password: " + humano.login.password);
   
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto humano extraido
obtenerPersonaFake(obtenerD);