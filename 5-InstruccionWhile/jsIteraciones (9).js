function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numeroIngresado;
	var flag = 0;
	var minimo;
	var maximo;


	while(respuesta!='no')
	{
		numeroIngresado= prompt("Ingrese un número");
		numeroIngresado= parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)){
			numeroIngresado=prompt("No es un número válido. Vuelva a ingresar:");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if (flag==0){
			minimo=numeroIngresado;
			maximo=numeroIngresado
			flag=1
		}
			else if (numeroIngresado>maximo) {
				maximo= numeroIngresado;
			}
			else if (numeroIngresado<maximo) {
				minimo=numeroIngresado;
			}

			respuesta=prompt("Si desea cancelar escriba 'no'");

			}
	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo; 


}//FIN DE LA FUNCIÓN