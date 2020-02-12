function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var random;

	random = Math.floor(Math.random() * 11);
console.log(random);


	if (random>8) {
		alert("Excelente");
	}
	if (random<5) {
		alert("Vamos la próxima se puede");
	}
	if (4<random && random<9) {
		alert("Aprobó")
		}

		/*
		if (random>8) {
			alert("Excelente");
		}
		if (random<5) {
			alert("Vamos la próxima se puede");
		}
		else{
			alert("Aprobó")
			}
		*/

}//FIN DE LA FUNCIÓN