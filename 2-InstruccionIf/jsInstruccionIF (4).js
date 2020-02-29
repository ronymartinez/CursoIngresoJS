function mostrar()
{
//tomo la edad  
var edad;

edad=parseInt(document.getElementById("edad").value);

if ( edad > 12 && edad < 18 )
    {
        alert("Es adolescente");
    }
    else {
        alert ("No es adolescente");
    }

}//FIN DE LA FUNCIÓN