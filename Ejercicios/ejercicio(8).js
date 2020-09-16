const numeros = ([1,2,3,4,5,6,7,8,9,10]);

var cuantosCumplen = numeros.reduce(function(contador, numeros)
{
    if(numeros % 2 == 0)
    {
        return contador + 1;
    }else{
        return contador;
    }
}, 0);
console.log(cuantosCumplen);