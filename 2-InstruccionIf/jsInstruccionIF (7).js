function mostrar()
{
//tomo la edad 

var edad;
var estadoCivil;

//Cargar variables
edad =parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;

if (edad<17 && ! (estadoCivil =="Soltero")) {
    alert("Es muy pequeño para No ser soltero")
}

/*
edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;


if (!  (edad<18 && estadoCivil=="Soltero")) {
    alert("Usted es muy pequeño para NO ser soltero");
}
*/
   


}//FIN DE LA FUNCIÓN