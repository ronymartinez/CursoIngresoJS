/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;


    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    numeroUnoParseado= parseInt(numeroUno);
    numeroDosParseado= parseInt(numeroDos);
    
    
    resultado= numeroUnoParseado + numeroDosParseado;

/* Opción 2:
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    resultado=numeroUno + numeroDos;
*/

    alert("La suma es " + resultado);
}

