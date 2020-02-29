/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var aumento;

    sueldo= parseInt(document.getElementById("sueldo").value);
    aumento= sueldo + sueldo *0.1;

    document.getElementById("resultado").value= aumento;

}
