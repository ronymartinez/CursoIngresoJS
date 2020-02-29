function mostrar()
{

	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var respuesta="si";
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var resto=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosyNeg;

	while(respuesta!="no")
	{
	numeroIngresado= prompt("Ingrese un número:");
	numeroIngresado= parseInt(numeroIngresado);
	
	while (isNaN(numeroIngresado)) {
	numeroIngresado= prompt("El número ingresado no es váluido. Ingrese nuevamente:");
	numeroIngresado= parseInt(numeroIngresado);}

	if (numeroIngresado>0){
		cantidadPositivos++;
		sumaPositivos= sumaPositivos +numeroIngresado;
		console.log(numeroIngresado)

	if (resto=numeroIngresado%2){
		cantidadPares++;
	} 
}
	else if (numeroIngresado==0){
		cantidadCeros++;
		cantidadPares++;
		console.log(numeroIngresado)
	}
	else if (numeroIngresado<0){
		cantidadNegativos++;
		sumaNegativos=sumaNegativos + numeroIngresado;
		console.log(numeroIngresado)

		if (resto=numeroIngresado%2){
			cantidadPares++;
			console.log(numeroIngresado)
		} 
	}
	respuesta = prompt("Si desea cancelar escriba NO");
}

	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferenciaPosyNeg=sumaPositivos + sumaNegativos;


	document.write("-La suma de los negativos es de: " +sumaNegativos + "<br>"+
					"-La suma de los positivos es de: " +sumaPositivos + "<br>"+
					"-La cantidad de positivos es de: " +cantidadPositivos + "<br>"+
					"-La cantidad de negativos es de: " +cantidadNegativos + "<br>"+
					"-La cantidad de ceros es de: " +cantidadCeros+  "<br>"+
					"-La cantidad de pares es de: " +cantidadPares+ "<br>"+
					"-El promedio de positivos es de: " +promedioPositivos+  "<br>" +
					"-El promedio de negativos es de: " +promedioNegativos+  "<br>" +
					"-La diferencia entre + y - es de: " +diferenciaPosyNeg+ "<br>" +
					"<br>" 
					);

					/*
					console.log(sumaNegativos)+
					console.log(sumaPositivos)+
					console.log(cantidadPositivos)+
					console.log(cantidadNegativos)+
					console.log(cantidadCeros)+
					console.log(cantidadPares)+
					console.log(promedioPositivos)+
					console.log(promedioNegativos)+
					console.log(diferenciaPosyNeg)
					*/

}//FIN DE LA FUNCIÓN