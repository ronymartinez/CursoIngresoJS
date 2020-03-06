function mostrar()
{
    var altura;
    var sexo;
    var acumuladorAltura=0;
    var promedioAltura;
    var minimaAltura;
    var sexoMinimaAltura;
    var contadorMujeres=0;


    for (var contador = 0; contador <5; contador++){


        altura= parseInt(prompt("Ingrese la altura en centímetros de 0 a 250:"));
        while(altura == null || altura == "" || altura<0 || altura>250 || isNaN(altura)){
        altura= parseInt(prompt("Error: Ingrese la altura en centímetros de 0 a 250:"));
        }
        console.log(altura)

        sexo=prompt("Ingrese el sexo 'm' o 'f':");
        while(sexo != "m" && sexo != "f" ){
        sexo=prompt("Error: Ingrese el sexo 'm' o 'f':");
    }
        console.log(sexo)
        
        if (contador==0 || minimaAltura>altura){
        minimaAltura=altura
        sexoMinimaAltura=sexo;
    }
    
        if (sexo=="m" && altura >190){
            contadorMujeres++;
        }

    acumululadorAltura = acumuladorAltura + altura;

}

        if(contador !=0){
        promedioAltura = acumululadorAltura / contador;
        }
        
        alert("\na) El promedio de las alturas totales: " + promedioAltura + 
        "\nb) La altura más baja y el sexo de esa persona: " +minimaAltura+ " y " +sexoMinimaAltura +
        "\nc) La cantidad de mujeres que su altura supere los 190 centimetros: " + contadorMujeres)





}