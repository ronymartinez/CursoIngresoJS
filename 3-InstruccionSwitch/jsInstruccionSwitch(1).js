function mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;

    var mes;

    mes=document.getElementById("mes").value;

    switch (mes) {
        case "Enero": alert("Que comiences bien el año.")
        break;

        case "Marzo": alert("A clases!!!")
        break;

        case "Julio": alert("Se vienen las vaciones.")
        break;

        case "Diciembre": alert("Felices fiestas")
        break;

        default: alert("Nada para informarte!")
        break;
    }





}//FIN DE LA FUNCIÓN