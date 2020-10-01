var funcion = (nota) => nota > 4;


function quienesAprobaron(aprobado){
     var alumnosAprobados;

    
    alumnosAprobados = aprobado.filter((nota) => 
    nota.every(funcion));

    return alumnosAprobados;
}


var aprobados = quienesAprobaron([[6,6,6],[5,3,6],[7,9,8]]);

for (const iterator of aprobados) {
    console.log(iterator);
}


