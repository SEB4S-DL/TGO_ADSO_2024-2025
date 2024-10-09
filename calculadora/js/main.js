function sumar(num1, num2)
        {
            resul = +num1 + +num2;
            return resul;
        }


function restar(num1,num2)
{
    resresta = -num1 - -num2;
    return resresta;
}

function mostarResultadoR()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = document.getElementById("resultado");

    let reresta = restar(n1,n2);
    res.textContent = reresta; 
}
function resultao()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = document.getElementById("resultado");

    let ressum = sumar(n1,n2);
    res.textContent = ressum;

}
function multiplicar(num1,num2)
{
    mul = num1 * num2;
    return mul;
}
function mostarResultadoMul()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = document.getElementById("resultado");

    let remulti = multiplicar(n1,n2);
    res.textContent = remulti; 
}

function dividir(num1,num2)
{
    div = num1 / num2;
    return div;
}
function mostarResultadoDiv()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let res = document.getElementById("resultado");

    let rediv = dividir(n1,n2);
    res.textContent = rediv; 
}

function raiz(num1)
{
    raicu = Math.sqrt(num1);
    return raicu;
}
function mostarResultadoRaiz()
{
    let n1 = document.getElementById("num1").value;
    let res = document.getElementById("resultado");

    let rerai = raiz(n1);
    res.textContent = rerai; 
}

function potenciar(base, exponente)
        {
            return Math.pow(base, exponente);
        }

function mostarResultadoPotencia()
{
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let res = document.getElementById("resultado");

    let repo = potenciar(n1, n2);
    res.textContent = repo; 
}



function crearRandom()
        {
        
            let n1 = document.getElementById("num1").value;
            let n2 = document.getElementById("num2").value;
            let eR = document.getElementById("resultado");

            res = Math.random() * (n2 - n1) + +n1;
            eR.textContent = res;
        }



function resValorabs()
{
    let n1 = document.getElementById("num1");
    document.getElementById("resultado").textContent = Math.abs(n1);

}


function redondear()
{   
    document.getElementById("resultado").textContent = Math.round();
    

}

function floor()
{   
    document.getElementById("resultado").textContent = Math.floor();
    
}

function cel()
{
    document.getElementById("resultado").textContent = Math.ceil(res);

}