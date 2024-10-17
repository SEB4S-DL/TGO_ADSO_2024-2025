function comedia()
{
    let edad = document.getElementById("edad").value;
    let res = document.getElementById("resultado");

    if(edad >=13 && edad <=15)
    {
        res.textContent = "The Truman Show y Back To The Future";

    }else if(edad >=16)
            {
                res.textContent = "The Wolf Of Wall Street y Back To The Future";
            }
}


function crimen()
{
    let edad = document.getElementById("edad").value;
    let res = document.getElementById("resultado");

    if(edad >=13 && edad <=15)
    {
        res.textContent = "El Secreto De Sus Ojos";

    }else if(edad >=16)
            {
                res.textContent = "The Godfather";
            }
}


function drama()
{
    let edad = document.getElementById("edad").value;
    let res = document.getElementById("resultado");

    if(edad >=13 && edad <=15)
    {
        res.textContent = "Casablanca y The Shawshank Redemption";

    }else if(edad >=16)
            {
                res.textContent = "Taxi Driver y The Shawshank Redemption";
            }
}

function musical()
{
    let edad = document.getElementById("edad").value;
    let res = document.getElementById("resultado");

    if(edad >=13 && edad <=15)
    {
        res.textContent = "La La Land y Les Miserables";

    }else if(edad >=16)
            {
                res.textContent = "The Rocky Horror Picture Show y La La Land";
            }
}