function mostrar()
{

	var negativo=1;
	var numeroIngresado;
	var positivo=0;
	
	var respuesta='si';

	while (respuesta== "si"){
		numeroIngresado= prompt("Ingrese un número");
		numeroIngresado= parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) {
		numeroIngresado= prompt("No es un número válido, ingrese nuevamente:");
		}
		if (numeroIngresado>=0){
		positivo=positivo + numeroIngresado;
		} else {
			
			negativo=negativo * numeroIngresado;
		}
		respuesta=prompt("Escriba SI, si desea agregar números:");

		console.log(positivo);
		console.log(negativo);
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN