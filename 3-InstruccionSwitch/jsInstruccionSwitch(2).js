function mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;
//alert (mesDelAño);
    var mes;

    mes= document.getElementById("mes").value;

    switch (mes) {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
                    alert ("Falta para invierno");
        break;
        
        case "Julio":
        case "Agosto":
                    alert("Abrigate que hace frío");
        break;
        
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
                    alert("Ya pasamos el frío, ahora el calor");
        break;
        
    }


}//FIN DE LA FUNCIÓN