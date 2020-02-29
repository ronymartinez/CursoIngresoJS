function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numeroIngresado;

	while (respuesta== "si"){
		
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)){

			numeroIngresado=prompt("No es un número válido. Vuelva a interntar:");
			numeroIngresado=parseInt(numeroIngresado);
		}

		contador++;
		acumulador=acumulador + numeroIngresado;
		respuesta=prompt("Si desea continuar ingrese 'si'");

		console.log("El contador es: "+contador);
		console.log("Se encuentra acumulando : "+acumulador);

	}

		document.getElementById("suma").value=acumulador;
		document.getElementById("promedio").value= acumulador/contador;


	/*
	do {
		numeroIngresado= prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
		numeroIngresado= prompt("No es un número válido.");
		numeroIngresado=parseInt(numeroIngresado);

		}
		
		contador++;
		acumulador= acumulador + numeroIngresado;
		numeroIngresado= prompt("¿Desea seguir agregando?");

		
	} while (numeroIngresado == respuesta){
			contador++;
			acumulador= acumulador + numeroIngresado;

			
			console.log("El contador es: "+contador);
			console.log("Se encuentra acumulando : "+acumulador);
		}

		document.getElementById("suma").value=acumulador;
		document.getElementById("promedio").value=acumulador/contador;

			*/

}//FIN DE LA FUNCIÓN