function mostrar()
{
//tomo la edad  
    var edad;

    edad=parseInt(document.getElementById("edad").value);
    if ( edad < 13 || edad > 17){
        alert("No es adolescente");

    }
    
    /*Segunda opción Negando

    if (! ( edad>12 && edad < 18 )){
        alert("No es adolescente");
    }
    */
    



}//FIN DE LA FUNCIÓN