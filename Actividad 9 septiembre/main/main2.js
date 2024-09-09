var contador = 1; //Variable donde se inicia un contador en 1
var temporizador;

function ininciar() //Funcion para empezar la funcion rotarImagenes
{
    temporizador = setInterval(rotarImagenes, 3000);
}
function rotarImagenes() 
{
    if(contador > 10) // si el contador es mayor a 10, lo reinicia a 0 y vuelve a empezar la rotacion de imagenes
    {
        contador = 0;
    }
    var img = document.getElementById('imgSlide');
    img.src = './images/img' + ++contador + '.jpg';
}