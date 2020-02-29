function mostrar()
{
var sexo;

do {
    sexo= prompt("Ingrese 'f' o 'm'");
    sexo = sexo.toLocaleLowerCase();

 } while (sexo != "m" && sexo != "f");



switch (sexo) {

    case "f":
        sexo = "Femenino";
        break;
    case "m":
        sexo = "Masculino";
        break;
}
    document.getElementById("Sexo").value= sexo;



/*
var sexo = prompt("ingrese f ó m .");
document.getElementById('Sexo').value=sexo;
*/

}//FIN DE LA FUNCIÓN