let datosjson;

fetch('banco.json')
.then(res => res.json())
.then((salida) =>{
    datosjson = salida
    let elementoTexto = document.getElementById("container")
    elementoTexto.textContent= datosjson.nbanco;

    let elementoTexto2 = document.getElementById("nb2")
    elementoTexto2.textContent = datosjson.nbanco2
    
    let elementoTexto3 = document.getElementById("nombre")
    elementoTexto3.textContent = datosjson.nombre

    let elementoTexto4 = document.getElementById("nc")
    elementoTexto4.textContent = datosjson.nrocuenta

    let elementoTexto5 = document.getElementById("musd")
    elementoTexto5.textContent = datosjson.montousd

    let elementoTexto6 = document.getElementById("meur")
    elementoTexto6.textContent = datosjson.montoeur

    let elementoTexto7 = document.getElementById("cbu")
    elementoTexto7.textContent = datosjson.cbu

    let elementoTexto8 = document.getElementById("abierta")
    elementoTexto8.textContent = datosjson.abierta

})