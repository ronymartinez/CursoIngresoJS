function mostrar()
{
    var animal;
    var peso;
    var temperatura;
    var respuesta="si";
    var resto=0;
    var temperaturasPares=0;
    var nombreAnimalMasPesado;
    var temperaturaAnimalMasPesado;
    var maximoPesado=0;
    var flag = 0;
    var contadorBajoCero=0;
    var contadorPeso=0;
    var acumuladorPeso=0;
    var promedioPeso;
    var pesoMaximoBajoCero;
    var pesoMinimoBajoCero;
    
    while(respuesta=="si"){
    
        animal= prompt("Ingrese animal");
        console.log(animal)        

        peso= prompt("Ingrese peso entre 1 y 1000")
        peso=parseInt(peso);
        contadorPeso++;
        acumuladorPeso= acumuladorPeso + peso;

        while (peso<1 || peso>1000 || isNaN(peso)){
            peso= prompt("Error: Ingrese peso entre 1 y 1000")
            peso=parseInt(peso);}
        console.log(peso)
        
       

        if (flag==0){
            maximoPesado=peso
            nombreAnimalMasPesado= animal;
            flag=1
        }
        else if (peso>maximoPesado) {
            maximoPesado= peso;
            nombreAnimalMasPesado=animal;

        }
        temperatura= prompt("Ingrese temperatura entre -30 y 30");
        temperatura=parseInt(temperatura);
            while (temperatura<-30 || temperatura>30 || isNaN(peso)) {
            temperatura= prompt("Error: Ingrese temperatura entre -30 y 30");
            temperatura=parseInt(temperatura);}
            console.log(temperatura)

        if (resto==temperatura%2){
            temperaturasPares++ }

        if (temperatura<0){
            contadorBajoCero++
        }
        respuesta=prompt("Ingrese 'si' para continuar o 'no' para cancelar'");
    }

    promedioPeso= acumuladorPeso / contadorPeso;
    pesoMaximoBajoCero= //FALTA
    pesoMinimoBajoCero= //FALTA
    //FALTA Temperatura del animal más pesado.

    document.write("-Cantidad de temperaturas pares: " + temperaturasPares+ "<br>"+
                "-Nombre y temperatura del animal más pesado: "+nombreAnimalMasPesado + " y " +temperaturaAnimalMasPesado + " grados" +"<br>"+
                "-Cantidad de animales que viven a menos de 0 grados: " + contadorBajoCero +"<br>"+
                "-Promedio del peso de todos los animales: " + promedioPeso +"<br>"+
                "-Peso máximo y mínimo de animales que viven bajo cero: " + pesoMaximoBajoCero + " y " + pesoMinimoBajoCero + "<br>"
         )
    

}
