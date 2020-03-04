function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var marcaMasPesado;
    var respuesta="si";
    var temperaturasPares=0;
    var cantidadBajoCero=0;
    var promedioPesoTotal;
    var pesoMaximo;
    var pesoMinimo;
    var acumuladorPeso=0;
    var contadorPeso=0;


    while (respuesta=="si"){

        marca=prompt("Ingrese la marca del producto");
        console.log(marca)

        peso=parseInt(prompt("Ingrese el peso (entre 1 y 100)"));
        while (isNaN(peso) || peso<1 || peso>100){
        peso=parseInt(prompt("Error: reingrese el peso (entre 1 y 100)"));
        }

        if(contadorPeso==0 || peso>pesoMaximo){
        marcaMasPesado=marca;
        pesoMaximo=peso;
        } 
        
        if(contadorPeso==0 || peso<pesoMinimo){
        pesoMinimo=peso;
        } 
        acumuladorPeso=acumuladorPeso+peso;
        contadorPeso++;

        console.log(peso)

        temperatura=parseInt(prompt("Ingrese la temperatura entre -30 y 30"));
        while(isNaN(temperatura) || temperatura>30 || temperatura<-30){
        temperatura=parseInt(prompt("Error: reingrese temperatura entre -30 y 30"));
        }
        
        if (0==temperatura % 2){
            temperaturasPares++;
        }
        if (temperatura<0){
            cantidadBajoCero++;
        }
        console.log(temperatura)
       
        

        respuesta= prompt ("Si desea continuar ingrese 'si'");
    }

    
    if (contadorPeso != 0){
    promedioPesoTotal= acumuladorPeso/contadorPeso;
    }

    document.write("-La cantidad de temperaturas pares es: " + temperaturasPares + "<br>"+
                "-La marca del producto más pesado es: " + marcaMasPesado + "<br>"+
                "-La cantidad de productos a menos de cero grados: " + cantidadBajoCero  + "<br>"+
                "-El promedio del peso de los productos es de: " + promedioPesoTotal  + "<br>"+
                "-El peso máximo y el mínimo es: " +pesoMaximo + " y " + pesoMinimo  + "<br>"
    )


}


    /*
    while(respuesta=="si"){
    
        marca= prompt("Ingrese marca");
        

        peso= prompt("ingrese peso entre 1 y 100")
        peso=parseInt(peso);
        while (peso<1 || peso>100){
            peso=parseInt(peso);
        }

        temperatura= prompt("Ingrese temperatura entre -30 y 30");
        temperatura=parseInt(temperatura);

    }
*/

