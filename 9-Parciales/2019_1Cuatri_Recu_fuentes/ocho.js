function mostrar()
{

    var color;
    var valor;
    contadorRojos=0;
    contadorRojo5000=0;
    var contador=0;
    var contadorMenos500=0;
    var promedioVehiculos;
    var acumuladorValor=0;
    var colorMasCaro;
    var respuesta="si";

    while(respuesta=="si"){

    color=prompt("Ingrese el color: rojo, verde o amarillo");
    while( color != "rojo" && color != "verde" && color != "amarillo" ){
    color=prompt("Error: Ingrese el color: rojo, verde o amarillo");
    }
    console.log(color)

    valor= parseInt(prompt("Ingrese un valor entre 0 y 10000"));
    while(valor < 0 || valor > 10000){
    valor= parseInt(prompt("Error: Ingrese un valor entre 0 y 10000"));
    }
    console.log(valor)

    // A)
    if (color== "rojo"){
        contadorRojos++;
    }

    // B)
    if (color == "rojo" && valor > 5000){
        contadorRojo5000++;
    }

    // C)
    if(valor<5000){
        contadorMenos500++;
    }
    // D)
    acumuladorValor= acumuladorValor + valor;

    // E)
    if (contador==0 || maximoValor < valor){
        maximoValor = valor;
        colorMasCaro= color;

    }


    contador++;
    if( contador !=0){
    promedioVehiculos= acumuladorValor /contador}
    
    respuesta= prompt("Ingrese 'si' para continuar");

    } // Fin while



    document.write(
            "a) Cantidad de rojos: " +contadorRojos 
   + "<br>"+ "b) Cantidad de rojos con precio mayor a 5000: " + contadorRojo5000 
   + "<br>"+ "c) Cantidad de vehiculos con precio inferior a 5000: " +contadorMenos500
   + "<br>"+ "d) Promedio de todos los vehículos ingresados: " + promedioVehiculos 
   + "<br>"+ "e) El más caro y su color: " + maximoValor+ " y " + colorMasCaro)


}
