let numeroSecreto = Math.floor(Math.random()*100) + 1; //Variable para redondear un numero hacia abajo al entero mas cercano
let intentos = 0;

function adivinar() //Funcion que permite tratar de adivinar un numero generado aleatoriamente
{
    let intento = document.getElementById("numero").value;
    intentos++;
    if(intento == numeroSecreto) //Se evalua si el intento es el numero correcto, de serlo se muestra el mensaje de (Correcto)
    {
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos ";
    }else if(intento < numeroSecreto)//Evalua si el numero que se ingreso es mayor
        {
            document.getElementById("resultado").innerText = "El numero es mayor. Inténtalo de nuevo.";
        }else //Evalua si el numero que ingreso es menor
            {
                document.getElementById("resultado").innerText = "El numero es menor. Inténtalo de nuevo.";
            }
}