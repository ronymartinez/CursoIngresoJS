function mostrar()
{

    var pais;
    var habitantes;
    var temperatura;
    var temperaturasPares=0;
    var contador=0;
    var minimoHabitantes;
    var paisMenosHabitantes;
    var contadorMas40=0;
    var contadorHabitantes=0;
    var promedioHabitantesPaises;
    var acumuladorHabitantes=0;
    var temperaturaMinima;
    var nombrePaisTemperaturaMinima;
    //var paisMas40;

    var respuesta= "si";


    while(respuesta== "si"){

        pais=prompt("Ingrese el nombre del país:");
        while(!isNaN(pais)){
        pais=prompt("Error: Ingrese el nombre del país:");
        }
        console.log(pais);

        habitantes= parseInt(prompt("Ingrese cantidad de habitantes en millones (de 1 a 7000):"));
        while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000){
            habitantes=prompt("Error: Ingrese cantidad de habitantes en millones (de 1 a 7000):");
            }
        console.log(habitantes);

        
        temperatura= parseInt(prompt("Ingrese la temperatura mínima (-50 a 50):"))
        while(isNaN(temperatura) || temperatura < -50 || temperatura > 50){
        temperatura= parseInt(prompt("Error: Ingrese la temperatura mínima (-50 a 50)):"));
        }
        console.log(temperatura);

        // A
        if(temperatura % 2 == 0){
            temperaturasPares++
        }
    
        // B
        if (contador == 0 || minimoHabitantes > habitantes){
        minimoHabitantes = habitantes;
        paisMenosHabitantes = pais;
        }
    
        // C
        if (temperatura > 40){
            contadorMas40++;
        }
        
        if(contador == 0 || temperaturaMinima > temperatura){

            temperaturaMinima = temperatura;
            nombrePaisTemperaturaMinima= pais;
        }
    
        acumuladorHabitantes= acumuladorHabitantes + habitantes;
        contador++
        if (contador !=0){
        promedioHabitantesPaises = acumuladorHabitantes / contador;
        }

        respuesta = prompt("Ingrese 'si' para continuar");
    }




    document.write("a) La cantidad de temperaturas pares: " + temperaturasPares + 
    "<br>" + "b) País con menos habitantes: " +  paisMenosHabitantes + 
    "<br>" + "c) Cantidad de países que superan los 40 grados: " + contadorMas40+
    "<br>" + "d) Promedio de habitantes entre los paises ingresados: " + promedioHabitantesPaises + 
    "<br>" + "f) Temperatura mínima ingresada, y nombre del pais que la registró: " + temperaturaMinima+ " y en " +nombrePaisTemperaturaMinima)


}
