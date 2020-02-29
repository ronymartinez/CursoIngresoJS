function mostrar()
{
    var animal;
    var peso;
    var temperatura;
    var respuesta="si";
    var resto=0;
    var temperaturasPares=0;
    var nombreAnimalMasPesado;
    var temperaturaAnimalMasPesado;
    var maximoPesado=0;
    var flag = 0;
    var contadorBajoCero;
    
    while(respuesta=="si"){
    
        animal= prompt("Ingrese animal");
        

        peso= prompt("Ingrese peso entre 1 y 1000")
        peso=parseInt(peso);
        while (peso<1 || peso>1000){
            peso=parseInt(peso);}

        if (flag==0){
            maximoPesado=peso
            nombreAnimalMasPesado= animal;
            flag=1
        }
        else if (peso>maximoPesado) {
            maximoPesado= peso;
            nombreAnimalMasPesado=animal;

        }


        temperatura= prompt("Ingrese temperatura entre -30 y 30");
        temperatura=parseInt(temperatura);
            while (temperatura<-30 || temperatura>30){
            temperatura=parseInt(temperatura);}
        if (resto=temperatura%2){
            temperaturasPares++ }
        
        if (flag==0){
            temperaturaAnimalMasPesado=temperatura;
             flag=1
            }
            else if (temperatura>temperaturaAnimalMasPesado) {
                temperaturaAnimalMasPesado= temperatura;
            }

        if (peso<0){
            contadorBajoCero++
        }


    }

    respuesta=prompt("Para continuar ingrese 'si'");

    document.write("-Cantidad de temperaturas pares: " + temperaturasPares+ "<br>"+
                "-Nombre y temperatura del animal más pesado: "+nombreAnimalMasPesado +"<br>"+
                "-Cantidad de animales que viven a menos de 0 grados: " + contadorBajoCero +"<br>"
            
                    )
    

 
}
