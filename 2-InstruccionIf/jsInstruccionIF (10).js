function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var random;

	random= (Math.floor(Math.random() * 10)+1);
	
	console.log(random);

	if ( random > 8){
		alert("Excelente");
		}else if (random <4) {
			alert ("Vamos, la próxima se puede");
		}
			else {
				alert("Aprobado");
			}

}//FIN DE LA FUNCIÓN