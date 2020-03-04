function mostrar()
{ //ERROR EN LOS MAXIMOS Y MINIMOS
    var letra;
    var numero;
    var pares=0;
    var impares=0;
    var ceros=0;
    var contador=0;
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var promedioPositivos;
    var acumuladorNegativos=0;
    var numeroMaximo;
    var numeroMinimo;
    var letraNumeroMaximo;
    var letraNumeroMinimo;
    var respuesta= "si";

    while(respuesta=="si"){

        letra=prompt("Ingrese una letra");
        while( !isNaN(letra)){
            letra=prompt("Error: Ingrese una letra");
        }
        console.log(letra);

        numero= parseInt(prompt("Ingrese un número de -100 al 100"))
        while(isNaN(numero) || numero>100 || numero<-100){
        numero= parseInt(prompt("Error: Ingrese un número de -100 al 100"))
        }

        if (numero==0){
            ceros++
        }  else if (numero<0){
            acumuladorNegativos= acumuladorNegativos + numero;
        } else {
            contadorPositivos++;
            acumuladorPositivos= acumuladorPositivos + numero;
        }

        if (numero%2==0){
            pares++
        } else {impares++}

        if( contador==0 || numeroMaximo<numero){
            numeroMaximo=numero;
            letraNumeroMaximo=letra;
        }

        if ( contador==0 || numeroMinimo>numero){
            numeroMinimo=numero;
            letraNumeroMinimo=letra;
        }

      console.log(numero);
contador++;
respuesta= prompt("Ingrese 'si' para continuar");
}

if (contadorPositivos!=0){

promedioPositivos= acumuladorPositivos / contadorPositivos;
}

document.write("a) La cantidad de números pares: " + pares + "<br>" +
"b) La cantidad de números impares: " +impares + "<br>" +
"c) La cantidad de ceros: " +ceros+ "<br>" +
"d) El promedio de todos los números positivos ingresados: " +promedioPositivos+ "<br>" +
"e) La suma de todos los números negativos: " + acumuladorNegativos+ "<br>" +
"f) El número y la letra del máximo y el mínimo: Máximo ("+ numeroMaximo + " y " + letraNumeroMaximo +  "). Mínimo (" + numeroMinimo + " y " + letraNumeroMinimo+")."
)

}//Fin del While
