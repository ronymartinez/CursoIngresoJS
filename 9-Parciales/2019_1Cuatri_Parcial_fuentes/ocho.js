function mostrar()
{
    var letra;
    var numero;
    var contadorPares=0;
    var contadorImPares=0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumuladorPos=0;
    var promedioPositivos;
    var acumuladorNeg=0;
    var numeroMaximo;
    var letraNumeroMaximo;
    var numeroMinimo;
    var letraNumeroMinimo;
    var contador=0;

    var respuesta="si";

    while(respuesta == "si"){

        letra=prompt("Ingrese una letra:");
        while(!isNaN(letra)){
        letra=prompt("Error: Ingrese una letra:");
        }
        console.log(letra)

        numero=parseInt(prompt("Ingrese un número entre -100 y 100:"));
        while(isNaN(numero) || numero<-100 || numero>100){
            numero=prompt("Error: Ingrese una número entre -100 y 100:");
        }
        console.log(numero)

        // A
        if (numero % 2 == 0){
            contadorPares++;
        }
        // B
        if (numero % 2 == 1 || numero % 2 == -1){
            contadorImPares++;
        }
        // C
        if (numero == 0){
            contadorCeros++;
        }
        // D
        if(numero > 0){
            contadorPositivos++;
            acumuladorPos= acumuladorPos + numero;
        }
        // E
        if(numero < 0){
            acumuladorNeg= acumuladorNeg + numero;
        }
        // F
        if (contador == 0 || numeroMaximo < numero){
            numeroMaximo = numero;
            letraNumeroMaximo = letra;

        }
        if (contador == 0 || numeroMinimo> numero){
            numeroMinimo = numero;
            letraNumeroMinimo = letra;

        }

        contador++;
        respuesta= prompt("Ingrese 'si' para continuar");
    }


    promedioPositivos= acumuladorPos / contadorPositivos;

    document.write("a) La cantidad de números pares: " +contadorPares+
    "<br>" + "b) La cantidad de números impares: " + contadorImPares+
    "<br>" + "c) La cantidad de ceros: " + contadorCeros+
    "<br>" + "d) El promedio de todos los números positivos ingresados: "+promedioPositivos+
    "<br>" + "e) La suma de todos los números negativos: "+acumuladorNeg+
    "<br>" + "f) El número y la letra del máximo y el mínimo: " + numeroMaximo  + letraNumeroMaximo + " y " + numeroMinimo + letraNumeroMinimo)


}
