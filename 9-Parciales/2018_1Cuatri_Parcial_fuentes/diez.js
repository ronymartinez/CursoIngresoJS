function mostrar()
{
    var marca;
    var kilos;
    var cantidad;
    var importe;
    var marcaMasKilos;
    var mayorCantidadesBolsa;
    var maximoKilos;
    var MarcaMayorCantidad;
    var mayorImporte;
    var marcaMayorImporte;
    var importeMenosPesado;
    var marcaMenospesado;
    var contador=0;
    var respuesta="si";

    while(respuesta== "si"){
        
        marca=prompt("Ingrese la marca");
        while(marca == null || marca == "" || !isNaN(marca)){
        marca=prompt("Error: Ingrese la marca");}
        console.log(marca);


        kilos=parseInt(prompt("Ingrese los kilos"));
        while(kilos == null || kilos == "" || isNaN(kilos)){
            kilos=parseInt(prompt("Error: Ingrese los kilos"))
        }
        console.log(kilos);


        cantidad=parseInt(prompt("Ingrese la cantidad"));
        while(cantidad == null || cantidad == "" || isNaN(cantidad)){
            cantidad=parseInt(prompt("Error: Ingrese los cantidad"))
        }
        console.log(cantidad);

        importe=parseInt(prompt("Ingrese el importe"));
        while(importe == null || importe == "" || isNaN(importe)){
            importe=parseInt(prompt("Error: Ingrese los importe"))
        }
        console.log(importe);

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
        contador++;
        respuesta= prompt("Ingrese 'si' para continuar");

    }//Fin del While

        document.write("a) Marca que tiene más kilos en el contenedor: "+ marcaMasKilos+       
        "<br>"+" b) Marca que tiene más bolsas de alimento: " + MarcaMayorCantidad+
        "<br>"+ "c) Marca con mayor importe por bolsa: " +marcaMayorImporte +
        "<br>" + "d) Importe y marca de la bolsa de alimento menos pesada: " + importeMenosPesado+ " y " + marcaMenospesado )


}
