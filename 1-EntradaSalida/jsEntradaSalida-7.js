/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultadoSuma;

    numeroUno= parseInt(document.getElementById("numeroUno").value);
    numeroDos= parseInt(document.getElementById("numeroDos").value);

    resultadoSuma= numeroUno + numeroDos;

    alert("La suma es " +resultadoSuma);
    
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultadoResta;

    numeroUno= parseInt(document.getElementById("numeroUno").value);
    numeroDos= parseInt(document.getElementById("numeroDos").value);

    resultadoResta= numeroUno - numeroDos;

    alert("La resta es " + resultadoResta);	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultadoMulti;

    numeroUno= parseInt(document.getElementById("numeroUno").value);
    numeroDos= parseInt(document.getElementById("numeroDos").value);

    resultadoMulti= numeroUno * numeroDos;

    alert("La multiplicación es " + resultadoMulti);	
	
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultadoDivision;

    numeroUno= parseInt(document.getElementById("numeroUno").value);
    numeroDos= parseInt(document.getElementById("numeroDos").value);

    resultadoDivision= numeroUno / numeroDos;

    alert("La división es " + resultadoDivision);	
	
}

