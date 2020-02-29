/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;
    var sueldoDescontado;

    importe= parseInt(document.getElementById("importe").value);
    descuento=importe * 0.25;
    importeDescontado= importe - descuento;

    document.getElementById("resultado").value=importeDescontado;


}
