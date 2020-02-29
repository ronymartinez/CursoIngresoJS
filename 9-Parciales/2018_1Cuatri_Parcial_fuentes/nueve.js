function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta="si";



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

}
