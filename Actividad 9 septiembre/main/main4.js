function calcular() // Funcion para permitir hacer calculos matematicos basicos
{
    let num1 = parseFloat(document.getElementById("num1").value);//variables para pedir numeros por inputs
    let num2 = parseFloat(document.getElementById("num2").value);//variables para pedir numeros por inputs
    let operacion = document.getElementById("operacion").value;//Variable para elegir la operacion a realizar
    let resultado;

    switch(operacion) //Evalua que operacion se elije y la realiza
    {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operacion invalida";

    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado; //Muestra el resultado de la operacion
}