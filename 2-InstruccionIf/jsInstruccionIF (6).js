function mostrar()
{
//tomo la edad  

var edad;

//Obtenemos edad y la parseamos
edad = parseInt(document.getElementById("edad").value);

//Evaluacion condicional
if (edad >= 18)
    {
        alert("Adulto");
    }
else
{
    if (edad >= 13)
    {
        alert("Adolescente");

    }
    else{
        alert("Niño");
    
        }

}

}//FIN DE LA FUNCIÓN