const obtenerChiste = require("./library");

function funcionCallback(ch)
{
    chiste = ch[0];
    console.log(chiste.id);
    console.log(chiste.type);
    console.log(chiste.setup);
    console.log(chiste.punchline);
}

obtenerChiste(funcionCallback);
