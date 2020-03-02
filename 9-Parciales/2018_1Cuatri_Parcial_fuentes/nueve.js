function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var marcaMasPesado;
    var respuesta="si";
    var temperaturasPares;
    var cantidadBajoCero;
    var promedioPesoTotal;
    var pesoMaximo;
    var pesoMinimo;


    while (respuesta=="si"){

        marca=prompt("Ingrese la marca del producto");
        console.log(marca)

        peso=prompt("Ingrese el peso (entre 1 y 100)");
        peso=parseInt(peso);
        console.log(peso)

        while (isNaN(peso) || peso<1 || peso>100){
        peso=prompt("Error: reingrese el peso (entre 1 y 100)");
        peso=parseInt(peso);

        }

        temperatura=prompt("Ingrese la temperatura");
        temperatura=parseInt(temperatura);
        console.log(temperatura)

        while(isNaN(temperatura) || temperatura>30 || temperatura<-30){
        temperatura=prompt("Error: reingrese temperatura entre -30 y 30")
        
        }

        respuesta= prompt ("Si desea continuar ingrese 'si'");
    }
    document.write("-La cantidad de temperaturas pares es: " + temperaturasPares + "<br>"+
                "-La marca del producto más pesado es: " + marcaMasPesado + "<br>"+
                "-La cantidad de productos a menos de cero grados: " + cantidadBajoCero  + "<br>"+
                "-El promedio del peso de los productos es de: " + promedioPesoTotal  + "<br>"+
                "-El peso máximo y el mínimo es: " +pesoMaximo + " y " + pesoMinimo  + "<br>"
    )




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
}
