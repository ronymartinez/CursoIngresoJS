function mostrar()
{
    var nombre;
    var cantidadDePersonas;
    var cantidadDeDías;
    var formaDePago;
    var respuesta="s";
    var maximoPersonas;
    var maximoPersonasHuesped;
    var maximoDeDias;
    var maximoDeDiasCantidad;
    var contadorDeReservas;
    var acumuladorDeDias;
    var promedio;
    var contadorQR=0;
    var contadorTarjeta=0;
    var contadorEfectivo=0;
    var formaDePagoMasUtilizado;


    while(respuesta=="s"){

        nombre=prompt("Ingrese nombre");
        while (!isNaN(nombre)){
        nombre=prompt("Ingrese nombre");
        }
    cantidadDePersonas= prompt("cantidad de personas");
    parseInt(cantidadDePersonas);

        while(isNaN(cantidadDePersonas) || cantidadDePersonas<1){
        cantidadDePersonas= prompt("cantidad de personas");
        parseInt(cantidadDePersonas);


    cantidadDeDías= prompt("cantidad de días");
        parseInt(cantidadDeDías);
        while(isNaN(cantidadDeDías) || cantidadDeDías<1){
            cantidadDeDías= prompt("cantidad de días");
            parseInt(cantidadDeDías);
        
    formaDePago=prompt("forma de pago");
        while(!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "QR" || formaDePago!="tarjeta"){
        formaDePago=prompt("forma de pago");
        }
    acumuladorDeDias=acumuladorDeDias+cantidadDeDías;


    }

    promedio=acumuladorDeDias/contadorDeReservas;

    if (contadorDeReservas==1 || cantidadDePersonas>maximoPersonas){
        maximoPersonas=cantidadDePersonas;
        maximoPersonasHuesped=nombre;
    }


    }





    /*
    var nombreIngresado;
    var personas=0;
    var cantidadDias;
    var SumaCantidadDias=0;
    var efectivo=0;
    var tarjeta=0;
    var QR=0;
    var mediodePago;
    var huespedMayor;
    var pagoMasUsado;
    var promedioDias;
    var respuesta="si";

    while (respuesta=="si") {

            nombreIngresado=prompt("Ingrese su nombre");
            personas++

            cantidadDias=prompt("Ingrese la cantidad de días");
            SumaCantidadDias= SumaCantidadDias + cantidadDias;
            if (SumaCantidadDias=<cantidadDias){
                huespedMayor=personas++;
            }

            mediodePago=prompt("Ingrese medio de pago (efectivo, tarjeta, QR:");
            if (mediodePago="efectivo"){
                efectivo++;
            }
            if (mediodePago="tarjeta"){
                tarjeta++;
            }
            if (mediodePago="QR"){
                QR++;
    }

    respuesta=prompt("Si desea agregar otra reserva ingrese 'si'");
    }
    huespedMayor=
    pagoMasUsado=
    promedioDias=

    document.write("-La cantidad de personas que se quedaron más días es: " +huespedMayor + "<br>"+
                   "-La forma de pago más usada es: "+ pagoMasUsado + "<br>"+
                   "-El promedio de la cantidad de días por reserva es: " +promedioDias)



     
    document.write("El huésped "+ nombreIngresado+ " reservó " + cantidadDias+ " días y paga con "+mediodePago);
 while (isNaN(cantidadDias)){
            cantidadDias=prompt("Número no válido, reingrese la cantidad de días");
    }
    */
}
