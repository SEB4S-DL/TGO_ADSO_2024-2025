const lista = [9,4,7,8,21]; //lista con las calificaciones ya definidas
let res = document.getElementById("resultado")//variable para llamar el h1 para mostrar el resultado

function mostrarLista() // muestra la lista de calificaciones al pulsar el boton de "lista"
{
    document.getElementById('lista-notas').style.display = 'block'
}


function promedio()//Muestra el promedio al pulsar el botón "promedio"
{
    let suma = 0 //Variable inicializada en 0 parra sumar las calificaciones
    for(let i=0; i < lista.length; i++)//ciclo para recorrer la lista
    {
        suma += lista[i] //suma cada calificación
        promedio = suma/5  //calcula el promedio
        res.textContent = "La suma de las notas es: " + suma + " y el promedio es: " + promedio //Se muetran los resultados
    }
}


function calificacionMasAlta()//Funcion para  mostrar la calificacion mas alta
{
    let calificacion;
    calificacion  = Math.max(...lista) //Se uso el metedo  Math.max para encontrar la calificacion mas alta
    {

        res.textContent = "La calificación mas alta es:  " + calificacion//se  muestra la calificacion mas alta en el h1
    }
}

function aplazo()//Determina cual fue la calificación más baja de la lista y lo muestra como aplazo
{
    
    let apla  = Math.min(...lista)//se uso  el metodo Math.min para encontrar la calificacion mas baja
    {
        res.textContent = "Hubo un aplazo y  la calificación mas baja es:  " + apla //se  muestra el mensaje con la calificacion mas baja
    }
        
}