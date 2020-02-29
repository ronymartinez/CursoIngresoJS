function mostrar()
{
//tomo la edad  
    var edad;

    edad=parseInt(document.getElementById("edad").value);

    if ( edad > 17){
        alert("Es mayor de edad")
    }
        else if ( edad < 18 && edad > 12)
        {
           alert("Es adolescente"); 
        }
        else {
            alert("Es niño o niña");
        }



}//FIN DE LA FUNCIÓN