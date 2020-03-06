function mostrar()
{
    var marca;
    var kilos;
    var cantidad;
    var importe;
    var maximoBolsas;
    var maximoKilosTotal
    var marcaMaximoBolsas;
    var marcaMaximoKilosTotal;
    var bolsaMenosPesada;
    var marcaBolsaMenosPesada;
    var importeBolsaMenosPesada;
    var mayorImporte;
    var marcaMayorImporte;
    var acumuladorKilosTotales=0;
    var contador=0;
    var respuesta="si";    

    while(respuesta== "si"){
        
        marca=prompt("Ingrese la MARCA");
        while(marca == null || marca == "" || !isNaN(marca)){
        marca=prompt("Error: Ingrese la marca");}
        console.log(marca);

        kilos=parseInt(prompt("Ingrese los KILOS (capacidad hasta 1000):"));
        while(kilos == null || kilos == "" || isNaN(kilos || kilos <0 || kilos>1000)){
            kilos=parseInt(prompt("Error: Ingrese los KILOS (capacidad hasta 1000):"))
        }
        console.log(kilos);

        cantidad=parseInt(prompt("Ingrese la CANTIDAD"));
        while(cantidad == null || cantidad == "" || isNaN(cantidad)){
            cantidad=parseInt(prompt("Error: Ingrese la cantidad"))
        }
        if (kilos * cantidad > 1000 || acumuladorKilosTotales + (kilos * cantidad)>1000){
            alert("Error: El contenedor superó el límite de 1000 Kg permitidos.");
            break;
        }

        console.log(cantidad);

        importe=parseInt(prompt("Ingrese el importe"));
        while(importe == null || importe == "" || isNaN(importe)){
            importe=parseInt(prompt("Error: Ingrese los importe"))
        }
        console.log(importe);
    
        // A)
        if (contador==0 || maximoKilosTotal< kilos * cantidad){
          
            maximoKilosTotal = kilos * cantidad;
            marcaMaximoKilosTotal = marca;
        }
        // B)
        if (contador==0 || maximoBolsas < cantidad){
            maximoBolsas=cantidad;
            marcaMaximoBolsas = marca;
        }
        // C)
        if (contador == 0 || mayorImporte<importe){
            mayorImporte = importe;
            marcaMayorImporte = marca;
        }
        // D)
        if (contador == 0 || bolsaMenosPesada> kilos){
            bolsaMenosPesada = kilos;
            marcaBolsaMenosPesada = marca;
            importeBolsaMenosPesada = importe;
        }

        acumuladorKilosTotales = acumuladorKilosTotales + (kilos * cantidad);
        console.log("Acum " + acumuladorKilosTotales);

        contador++;
        respuesta= prompt("Ingrese 'si' para continuar");

    }//Fin del While

        document.write("a) Marca que tiene más kilos en el contenedor: "+ marcaMaximoKilosTotal+       
        "<br>"+" b) Marca que tiene más bolsas de alimento: " + marcaMaximoBolsas+
        "<br>"+ "c) Marca con mayor importe por bolsa: " +marcaMayorImporte +
        "<br>" + "d) Importe y marca de la bolsa de alimento menos pesada: " + importeBolsaMenosPesada+ " y " + marcaBolsaMenosPesada )


}

/*
   if (contador==0 || maximoKilos<kilos){
        maximoKilos=kilos;
        marcaMasKilos=marca;
        }
        
        if (contador==0 || mayorCantidadesBolsa<cantidad){
            mayorCantidadesBolsa=cantidad;
            MarcaMayorCantidad=marca;
        }

        if(contador==0 || mayorImporte<importe){
            mayorImporte=importe;
            marcaMayorImporte=marca;
        }

        if(contador==0 || importeMenosPesado>importe){
            importeMenosPesado=importe;
            marcaMenospesado=marca;
        }
*/