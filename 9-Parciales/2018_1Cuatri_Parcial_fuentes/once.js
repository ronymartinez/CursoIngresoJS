function mostrar()
{
    var nombre;
    var cantidadPersonas;
    var cantidadDias;
    var formaDePago;
    var huespedMasPersonas;
    var maximoPersonas;
    var maximoDias;
    var personasMasDias;
    var mayorFormaPago;
    var promedioReserva;
    var cantidadReservas=0;
    var acumuladorReservas=0;
    var contador = 0;
    var respuesta= "si";
    var contadorQR=0;
    var contadorEfectivo;
    var contadorTarjeta;

while(respuesta=="si"){

    nombre= prompt("Ingrese nombre del huésped");
    while( nombre == null || nombre == ""){
        nombre= prompt("Error: Ingrese nombre del huésped");
    }
    console.log(nombre);

    cantidadPersonas=parseInt(prompt("Ingrese cantidad de personas"));
    while( cantidadPersonas == null || cantidadPersonas == "" || isNaN(cantidadPersonas)){
        cantidadPersonas=parseInt(prompt("Error: Ingrese cantidad de personas"));
    }
    console.log(cantidadPersonas);

    cantidadDias=parseInt(prompt("Ingrese cantidad de días"));
    while( cantidadDias == null || cantidadDias == "" || isNaN(cantidadDias)){
        cantidadDias=parseInt(prompt("Error: Ingrese cantidad de días"))
    } 

    console.log(cantidadDias);

    formaDePago=prompt("Ingrese la forma de pago");
    while( formaDePago.toLocaleLowerCase() != "efectivo" && formaDePago != "tarjeta" && formaDePago != "QR" && formaDePago != "qr"){
        formaDePago=prompt("Error: Ingrese la forma de pago");
    }
    console.log(formaDePago);

    if(contador==0 || maximoPersonas<cantidadPersonas){
        maximoPersonas= cantidadPersonas;
        huespedMasPersonas=nombre;
    }

    if (contador==0 || maximoDias<cantidadDias){
        maximoDias = cantidadDias;
        personasMasDias=cantidadPersonas

    }


   if (formaDePago == "efectivo"){
       contadorEfectivo++
   } else if (formaDePago == "qr" || formaDePago == "QR"){
       contadorQR++
   }else {contadorTarjeta++}

   if (contador==0 || mayorFormaPago <contadorEfectivo || mayorFormaPago <contadorQR || mayorFormaPago<contadorTarjeta){
       mayorFormaPago=formaDePago;
    
   }
    acumuladorReservas= acumuladorReservas + cantidadDias;
    contador++
    respuesta= prompt("Ingrese 'si' para continuar");

}
    if (contador !=0) {
        promedioReserva= acumuladorReservas / contador;
    }

document.write("a) Huésped que trajo más personas en una sola reserva: " + huespedMasPersonas+
"<br>" + "b) Cantidad de personas que se quedaron más días: " + personasMasDias +
"<br>" + "c) Forma de pago más utilizada: " +mayorFormaPago +
"<br>" + "d) Promedio de cantidad de días por reserva: " + promedioReserva)

}