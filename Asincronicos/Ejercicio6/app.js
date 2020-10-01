const obtenerPersonaFake = require("./library");



// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido

obtenerPersonaFake().then(humano => { 
  console.log("Nombre: " + humano.results[0].name.title+" "+humano.results[0].name.first+" "+humano.results[0].name.last);
  console.log("Genero: " +humano.results[0].gender);
    console.log("Pais: " +humano.results[0].location.country+" "+ "Estado: " +humano.results[0].location.state+" "+ "Ciudad: " +humano.results[0].location.city+"\n"+ "Calle: " +humano.results[0].location.street.name+" "+ "Numero: " +humano.results[0].location.street.number+" "+ "Codigo postal: " +humano.results[0].location.postcode);
    console.log("Email: " + humano.results[0].email);
    console.log("Username: " + humano.results[0].login.username);
    console.log("Password: " + humano.results[0].login.password);
    }).catch((err)=>{
      console.log('Persona no encontrada');
  });