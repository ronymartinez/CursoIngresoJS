function mostrar()
{
//tomo la edad  
//alert (laHora);

var hora;

hora=parseInt(document.getElementById("hora").value);


switch (hora) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Es de mañana.");
    break;

    default:
         alert("No es de mañana");
    break;
}

/*
    if (hora<12 && hora >6){
        alert ("Es de mañana.");

      }  else {
        alert("No es de mañana");
    }
*/
}//FIN DE LA FUNCIÓN