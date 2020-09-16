// Crea una clase Persona que tenga los atributos nombre y edad. 
//Además agregale un método presentarse()
// que como resultado imprima un mensaje diciendo su nombre y edad

class Persona 
{
    constructor(nombre, edad)
    {
    this.nombre = nombre;
    this.edad = edad;
    }
    presentarse()
{
    return "Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años ";
}
}

//Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.

class Estudiante extends Persona
{
    constructor(nombre,edad,profesor)
    {
        super(nombre,edad);
        this.profesor = profesor;
        
    }
    setProfesor(profesor)
    {
        return profesor;
    }
    estudiando()
    {
        return "Estudiando con";
    }
}

//Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante.
// Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando
// y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es responsable de manejar 
//de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)

class Profesor extends Persona
{
    constructor(estudiantes)
    {
       this.estudiantes = estudiantes.Array(Estudiante);
    }
    addEstudiante(unEstudiante)
    {
        
        return unEstudiante;
    }
    enseñando(profe)
    {
        this.estudiantes = profe;
        var profe = new Profesor("Messi");
        const almumnos = ['juan', 'mati', 'carlos'];
        return almumnos;
    }
}

var p = new Persona("Juan", "25");
var e = new Estudiante();

console.log(p.presentarse());
console.log(e.estudiando(), e.setProfesor("Messi"));

// 13 SIN TERMINAR //
