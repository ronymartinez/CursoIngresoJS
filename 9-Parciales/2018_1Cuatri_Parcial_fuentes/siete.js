function mostrar()
{

    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var promedioNotas;
    var notaBaja;
    var sexoBajo;
    var contadorVMas6 = 0;



    for (var i = 0; i < 5; i++) {
        nota = parseInt(prompt("Ingrese nota (0-10): "));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese nota (0-10): "));
        }
        sexo = prompt("Ingrese sexo (f-m): ");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
        }

        acumuladorNotas = acumuladorNotas + nota;

        if (i == 0 || nota < notaBaja) {
            notaBaja = nota;
            sexoBajo = sexo;
        }

        if (sexo == 'm' && nota >= 6) {
            contadorVMas6++;
        }

    }// fin for

    promedioNotas = acumuladorNotas / 5;

    alert("Promedio Notas: " + promedioNotas
        + "\nNota mas baja: " + notaBaja + " Sexo: " + sexoBajo
        + "\nCantidad Varones mas 6: " + contadorVMas6
    );




    /*
    var nota;
    var sexo;
    var contador=0;

    while(contador<5){
    nota=parseInt(prompt("Ingrese la nota entre 0 y 10"));
        while(nota>10 || nota<0){
            nota=parseInt(prompt("Error: reingrese la nota entre 0 y 10"))
        }
    sexo=prompt("Ingrese el sexo");
        while(sexo)


    }
*/
}
