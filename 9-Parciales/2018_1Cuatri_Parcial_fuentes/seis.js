function mostrar()
{

    hora=parseInt(document.getElementById("laHora").value);

    switch(hora){

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        alert ("Es de mañana");
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alert ("Es de tarde");
        break;

        case 20:
        case 21:
        case 22:
        case 23:
        alert("Es de noche");
        alert("A dormir");
        break;

        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        alert("Es de noche");
        break;

        default:
        alert("No ha ingresado una hora válida");
   
        


}//Fin del Switch

}

/*
//if (hora>23 || hora<0)*/