function mostrar()
{
    var nota;
    var sexo;
    var promedioNotas;
    var contadorNotas=0;
    var acumuladorNotas=0;
    var notaMasBaja;
    var sexoNotaMasBaja;
    var varonesMas6=0;

    for (var contador = 0; contador < 5; contador++){

        nota=parseInt(prompt("Ingrese nota entre 0 y 10"));
            while (isNaN(nota) || nota<0 || nota>10){
            nota=parseInt(prompt("Error: Ingrese la nota entre 0 y 10"))}
            
            contadorNotas++
            acumuladorNotas= acumuladorNotas + nota;
            console.log(nota);
           
           

        sexo=prompt("Ingrese el sexo 'f' o 'm'");
             while (sexo != "f" && sexo!="m"){
             sexo=prompt("Error: Ingrese el sexo 'f' o 'm'");
             }
            console.log(sexo);

        if(contador == 0 || notaMasBaja>nota){
                notaMasBaja=nota;
                sexoNotaMasBaja=sexo;
            }
                
    
        if( sexo== "m" && nota>=6){
            varonesMas6++
        }

    } //Fin for

    if (contadorNotas !=0){
    promedioNotas= acumuladorNotas / contadorNotas}


    alert("a)El promedio de las notas totales es: "+ promedioNotas +
       "\nb) La nota más baja y el sexo de la persona es: " + notaMasBaja + " y " + sexoNotaMasBaja +
        "\nc) La cantidad de varones con nota mayor o gual a 6 es: " + varonesMas6)

}
