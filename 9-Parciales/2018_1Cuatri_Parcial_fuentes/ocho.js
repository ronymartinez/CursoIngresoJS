function mostrar()
{

    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var acumuladorPos = 0;
    var acumuladorNeg = 0;
    var contadorPos = 0;
    var contadorCeros = 0;
    var minimo;
    var letraMinimo;
    var maximo;
    var letraMaximo;
    var flag = 0;
    var promedioPos = 0;

    do {

        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Es no es una letra. Ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese numero (-100 y 100): "));
        }
        // --------------- paridad --------------------
        if (numero % 2 == 0) {
            // par
            contadorPares++;
        }
        else {
            // impar
            contadorImpares++;
        }

        // --------------- Signo ----------------------
        if (numero > 0) {
            //positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else if (numero < 0) {
            // negativos
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // ceros
            contadorCeros++;
        }

        // -------------- maximos y minimos-------------------

        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMinimo = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMaximo = letra;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    // -------------- calculo de promedio ----------

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos.toFixed(2) + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Letra Maximo: " + letraMaximo + " Numero: " + maximo + "</br>");
    document.write("f) Letra Maximo: " + letraMinimo + " Numero: " + minimo + "</br>");

    }


    /*
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
