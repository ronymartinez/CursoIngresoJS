function mostrar()
{

   
    for (var contador= 1;contador<=10; contador++){
        
        document.write(contador + "</br>")
    }


}


















/*
function mostrar() {
    var contador = 0;
    var numero;
    var mayor;
    var menor;

    while (contador < 5) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if( contador == 0 || numero > mayor){
            mayor = numero;
        }
        if( contador == 0 || numero < menor){
            mayor = numero;
        }

        contador++;
    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);



}/*

function mostrar() {

    var numero;
    var mayor;
    var menor;

    for (var contador = 0; contador < 5; contador++) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if (contador == 0 || numero > mayor) {
            mayor = numero;
        }
        if (contador == 0 || numero < menor) {
            menor = numero;
        }

    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);



}

function mostrar() {

    var numero;
    var mayor;
    var menor;
    var seguir;
    var flag = 0;

    do {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if (flag == 0 || numero > mayor) {
            mayor = numero;
        }
        if (flag == 0 || numero < menor) {
            menor = numero;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    alert("El mayor numero es " + mayor + " y el menor es " + menor);
    */
