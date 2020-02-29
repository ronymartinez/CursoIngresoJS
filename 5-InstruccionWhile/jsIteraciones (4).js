function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);
	
	while (!(numero <10 && numero >-1))
		{
			alert ("No está entre 0 y 9");
			numero = prompt("ingrese un número entre 0 y 10.");
			console.log(numero);
		}

		document.getElementById("Numero").value= numero

}//FIN DE LA FUNCIÓN