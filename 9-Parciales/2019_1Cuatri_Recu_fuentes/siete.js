function mostrar()
{

var kilos;
var sabor;
var promedioKilosTotales;
var promedioKilosCarne;
var cantidadSaborCarne=0;
var masLiviano;
var saborMasLiviano;
var acumuladorKilosCarne=0;
var acumuladorKilosTotal=0;


for ( var contador = 0 ; contador <10 ; contador++){

    kilos= parseInt(prompt("Ingrese la cantidad de kilos (0 a 500):"));
    while (kilos<0 || kilos >500 || isNaN (kilos)){
    kilos= parseInt(prompt("Error: Ingrese la cantidad de kilos (0 a 500):"));
    }
    console.log(kilos)


    sabor= prompt("Ingrese el sabor (carne, vegetales o pollo):");
    while (sabor != "carne" && sabor != "vegetales" && sabor != "pollo"){
    sabor= prompt("Error: Ingrese el sabor (carne, vegetales o pollo):");
    }
    console.log(sabor)


    if (contador == 0 || masLiviano > kilos){
        masLiviano = kilos;
        saborMasLiviano = sabor;
    }

    if (sabor == "carne"){
        cantidadSaborCarne++;
        acumuladorKilosCarne = acumuladorKilosCarne + kilos;
    }

    
    acumuladorKilosTotal = acumuladorKilosTotal + kilos;

} //FIN FOR

promedioKilosCarne= acumuladorKilosCarne / cantidadSaborCarne;
promedioKilosTotales= acumuladorKilosTotal / 10;


alert("\na) Promedio de los kilos totales: " + promedioKilosTotales + 
     "\nb) El más liviano y su sabor: " + masLiviano + " y " + saborMasLiviano +
     "\nc) Cantidad de sabor carne y el promedio de kilos de sabor carne: "  + cantidadSaborCarne +  " y " + promedioKilosCarne)






}
