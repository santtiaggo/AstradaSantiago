const obtenerChiste = require("./library");


function mostrarChiste(ch)
{
    let chiste = ch[0];
    console.log(chiste.id);
    console.log(chiste.type);
    console.log(chiste.setup);
    console.log(chiste.punchline);
}

obtenerChiste().then((ch) => {
    mostrarChiste(ch);
}).catch((err) => {
    console.log('No se encontro el chiste');
});
