function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var promedio;

	do {
		numeroIngresado= prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
		numeroIngresado= prompt("No es un número válido.");
		}

		contador++;
		acumulador= acumulador + numeroIngresado;

		console.log("El contador es: "+contador);
		console.log("Se encuentra acumulando : "+acumulador);
		
	} while (contador<5) {

	promedio= acumulador / contador;

	document.getElementById("suma").value=acumulador;
	document.getElementById("promedio").value=promedio;

	}



	/*
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
*/
}//FIN DE LA FUNCIÓN