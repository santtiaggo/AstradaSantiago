var numero = 5; 
function resultado(num)
{

   if(num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10)
   {
        num = "es par";
        return num;
   }else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9)
   {
      num = "es impar";
      return num;
   }else{
       console.log("numero invalido");
   }
   
   }
   console.log(resultado(numero));