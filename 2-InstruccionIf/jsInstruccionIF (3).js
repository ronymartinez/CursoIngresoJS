function mostrar()
{
//tomo la edad  
    var edad;

    edad= parseInt(document.getElementById("edad").value);

    if ( edad > 17 )
        {
        alert("Es mayor de edad");
        } else
        {alert("No es mayor de edad");
        }

}//FIN DE LA FUNCIÓN