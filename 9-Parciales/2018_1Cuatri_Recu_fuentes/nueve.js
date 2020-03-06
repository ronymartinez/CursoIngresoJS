function mostrar()
{ // FALTA MAXIMOS Y MINIMOS
    var nombre;
    var peso;
    var temperatura;
    var temperaturasPares=0;
    var animalMasPesado;
    var nombreMasPesado;
    var temperaturaMasPesado;
    var animalesCeroGrados=0;
    var promedioPeso;
    var pesoMaximoBajoCero;
    var pesoMinimoBajoCero;
    var contador=0;
    var contadorNeg=0;
    var acumuladorPeso=0;
    var respuesta= "si";

    while (respuesta== "si"){

        nombre = prompt("Ingrese el nombre del animal");
        while( nombre == null || nombre == "" || !isNaN(nombre)){
        nombre = prompt("Error: Ingrese el nombre del animal");
        }
        console.log(nombre);

        peso = parseInt(prompt("Ingrese el peso entre 1 y 1000"));
        while( peso == null || peso == "" || isNaN(peso) || peso<1 || peso>1000){
            peso = prompt("Error: Ingrese el peso del animal entre 1 y 1000");
        }
        console.log(peso);
        
        temperatura = parseInt(prompt("Ingrese el temperatura entre -30 y 30"));
        while( temperatura == null || temperatura == "" || isNaN(temperatura)
            || peso<-30 || peso>30){
            temperatura = prompt("Error: Ingrese el temperatura del animal");
        }
        console.log(temperatura);

        
        

        if (temperatura % 2 == 0){
            temperaturasPares++
        }

        if (contador==0 || animalMasPesado<peso){
            animalMasPesado = peso;
            nombreMasPesado = nombre;
            temperaturaMasPesado = temperatura;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++
        respuesta= prompt("Ingrese 'si' para continuar");

}
  
    if (promedioPeso != 0){
    promedioPeso = acumuladorPeso / contador;
    } 



        document.write("a) Cantidad de temperaturas pares: " + temperaturasPares+
        "<br>"+ "b) Nombre y temperatura del animal más pesado: " + nombreMasPesado+ " y " +temperaturaMasPesado+
        "<br>"+ "c) Cantidad de animales que viven a menos de 0 grados: " + animalesCeroGrados +
        "<br>"+ "d) Promedio del peso de todos los animales: " + promedioPeso + 
        "<br>"+ "f) Peso máximo y mínimo de todos los animales cuyas temperaturas sean bajo cero: " +pesoMaximoBajoCero + " y " +pesoMinimoBajoCero
        )



}



/*
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
    




             if (contadorNeg==0 && temperatura<0){
            animalesCeroGrados++;
            pesoMaximoBajoCero = peso;
            pesoMinimoBajoCero = peso;
            contadorNeg==1
        }
        if (pesoMaximoBajoCero < peso){
            pesoMinimoBajoCero = peso;
        }
        if (pesoMinimoBajoCero > peso){
            pesoMinimoBajoCero = peso;
        }
*/