// Variable para almacenar el tiempo actual
let time = new Date();
let deltaTime = 0;

// Verifica el estado de carga del documento
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(Init, 1);
} else {
    document.addEventListener("DOMContentLoaded", Init); // Si el documento no está listo, espera a que se cargue
}

// Función para iniciar
function Init() {
    time = new Date(); // Inicializa el tiempo
    Start(); // Llama a la función de inicio
    Loop(); // Comienza el bucle de juego
}

// Función principal del bucle de juego
function Loop() {
    deltaTime = (new Date() - time) / 1000; // Calcula el tiempo transcurrido desde el último frame
    time = new Date(); // Actualiza el tiempo actual
    Update(); // Actualiza el estado del juego
    requestAnimationFrame(Loop); // Solicita el siguiente frame
}

// Variables del juego
let sueloY = 22; // Posición Y del suelo
let velY = 0; // Velocidad vertical del dinosaurio
let impulso = 900; // Impulso del salto
let gravedad = 2500; // Gravedad

let dinoPosX = 42; // Posición X del dinosaurio
let dinoPosY = sueloY; // Posición Y del dinosaurio

let sueloX = 0; // Posición X del suelo
let velEscenario = 1280 / 3; // Velocidad de desplazamiento del escenario
let gameVel = 1; // Velocidad del juego
let score = 0; // Puntuación del juego

let parado = false; // Estado de si el dinosaurio está parado
let saltando = false; // Estado de si el dinosaurio está saltando

// Variables para obstáculos
let tiempoHastaObstaculo = 2;
let tiempoObstaculoMin = 0.7;
let tiempoObstaculoMax = 1.8;
let obstaculoPosY = 16;
let obstaculos = []; // Array para almacenar los obstáculos

// Variables para nubes
let tiempoHastaNube = 0.5;
let tiempoNubeMin = 0.7;
let tiempoNubeMax = 2.7;
let maxNubeY = 270;
let minNubeY = 100;
let nubes = []; // Array para almacenar las nubes
let velNube = 0.5; // Velocidad de desplazamiento de las nubes

// Variables para elementos del DOM
let contenedor;
let dino;
let textoScore;
let suelo;
let gameOver;

// Función de inicio del juego
function Start() {
    gameOver = document.querySelector(".game-over"); // Selecciona el elemento de "Game Over"
    suelo = document.querySelector(".suelo"); // Selecciona el elemento del suelo
    contenedor = document.querySelector(".contenedor"); // Selecciona el contenedor principal
    textoScore = document.querySelector(".score"); // Selecciona el elemento de puntuación
    dino = document.querySelector(".dino"); // Selecciona el dinosaurio
    document.addEventListener("keydown", HandleKeyDown); // Añade un evento de tecla
}

// Función para actualizar el estado del juego
function Update() {
    if (parado) return; // Si el juego está detenido, no realiza actualizaciones

    MoverDinosaurio(); // Mueve el dinosaurio
    MoverSuelo(); // Mueve el suelo
    DecidirCrearObstaculos(); // Decide si se deben crear nuevos obstáculos
    DecidirCrearNubes(); // Decide si se deben crear nuevas nubes
    MoverObstaculos(); // Mueve los obstáculos
    MoverNubes(); // Mueve las nubes
    DetectarColision(); // Detecta colisiones

    velY -= gravedad * deltaTime; // Aplica la gravedad
}

// Maneja el evento de tecla presionada
function HandleKeyDown(ev) {
    if (ev.keyCode == 32) { // Verifica si la tecla presionada es la barra espaciadora
        Saltar(); // Llama a la función de salto
    }
}

// Función para hacer saltar al dinosaurio
function Saltar() {
    if (dinoPosY === sueloY) { // Verifica si el dinosaurio está en el suelo
        saltando = true; // Marca el dinosaurio como saltando
        velY = impulso; // Aplica el impulso de salto
        dino.classList.remove("dino-corriendo"); // Cambia la animación del dinosaurio
    }
}

// Función para mover el dinosaurio
function MoverDinosaurio() {
    dinoPosY += velY * deltaTime; // Actualiza la posición Y del dinosaurio
    if (dinoPosY < sueloY) { // Si el dinosaurio está por encima del suelo
        TocarSuelo(); // Llama a la función para tocar el suelo
    }
    dino.style.bottom = dinoPosY + "px"; // Actualiza la posición del dinosaurio
}

// Función para ajustar el dinosaurio al suelo
function TocarSuelo() {
    dinoPosY = sueloY; // Establece la posición Y en el suelo
    velY = 0; // Detiene el movimiento vertical
    if (saltando) { // Si el dinosaurio estaba saltando
        dino.classList.add("dino-corriendo"); // Reanuda la animación de correr
    }
    saltando = false; // Marca el dinosaurio como no saltando
}

// Función para mover el suelo
function MoverSuelo() {
    sueloX += CalcularDesplazamiento(); // Actualiza la posición X del suelo
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px"; // Ajusta la posición del suelo
}

// Calcula el desplazamiento del suelo
function CalcularDesplazamiento() {
    return velEscenario * deltaTime * gameVel; // Calcula el desplazamiento basado en la velocidad del escenario
}

// Función para manejar la colisión del dinosaurio
function Estrellarse() {
    dino.classList.remove("dino-corriendo"); // Detiene la animación de correr
    dino.classList.add("dino-estrellado"); // Cambia a la animación de estrellado
    parado = true; // Marca el juego como detenido
}

// Decide si se debe crear un nuevo obstáculo
function DecidirCrearObstaculos() {
    tiempoHastaObstaculo -= deltaTime; // Reduce el tiempo hasta el próximo obstáculo
    if (tiempoHastaObstaculo <= 0) {
        CrearObstaculo(); //función para crear un nuevo obstáculo
    }
}

// Decide si se debe crear una nueva nube
function DecidirCrearNubes() {
    tiempoHastaNube -= deltaTime; // Reduce el tiempo hasta la próxima nube
    if (tiempoHastaNube <= 0) {
        CrearNube(); // Llama a la función para crear una nube
    }
}

// Crea un nuevo obstáculo
function CrearObstaculo() {
    let obstaculo = document.createElement("div"); // Crea un nuevo elemento
    contenedor.appendChild(obstaculo); // Añade el obstáculo al contenedor
    obstaculo.classList.add("cactus"); // Asigna la clase cactus
    if (Math.random() > 0.5) obstaculo.classList.add("cactus2"); // Asigna la clase cactus2 con 50% de probabilidad
    obstaculo.posX = contenedor.clientWidth; // Establece la posición X del obstáculo
    obstaculo.style.left = contenedor.clientWidth + "px"; // Ajusta la posición

    obstaculos.push(obstaculo); // Añade el obstáculo al array de obstáculos
    tiempoHastaObstaculo = tiempoObstaculoMin + Math.random() * (tiempoObstaculoMax - tiempoObstaculoMin) / gameVel; // Calcula el tiempo hasta el próximo obstáculo
}

// Crea una nueva nube
function CrearNube() {
    let nube = document.createElement("div"); // Crea un nuevo elemento div
    contenedor.appendChild(nube); // Añade la nube al contenedor
    nube.classList.add("nube"); // Asigna la clase nube
    nube.posX = contenedor.clientWidth; // Establece la posición X de la nube
    nube.style.left = contenedor.clientWidth + "px"; // Ajusta la posición
    nube.style.bottom = minNubeY + Math.random() * (maxNubeY - minNubeY) + "px"; // Establece la posición Y de la nube
    
    nubes.push(nube); // Añade la nube al array de nubes
    tiempoHastaNube = tiempoNubeMin + Math.random() * (tiempoNubeMax - tiempoNubeMin) / gameVel; // Calcula el tiempo hasta la próxima nube
}

// Mueve los obstáculos
function MoverObstaculos() {
    for (let i = obstaculos.length - 1; i >= 0; i--) {
        if (obstaculos[i].posX < -obstaculos[i].clientWidth) { // muestra si el obstáculo ha salido del contenedor
            obstaculos[i].parentNode.removeChild(obstaculos[i]); // Elimina el obstáculo
            obstaculos.splice(i, 1); // Elimina el obstáculo del array
            GanarPuntos(); // Llama a la función para ganar puntos
        } else {
            obstaculos[i].posX -= CalcularDesplazamiento(); // Actualiza la posición X del obstáculo
            obstaculos[i].style.left = obstaculos[i].posX + "px"; // Ajusta la posición
        }
    }
}

// Mueve las nubes
function MoverNubes() {
    for (let i = nubes.length - 1; i >= 0; i--) {
        if (nubes[i].posX < -nubes[i].clientWidth) { // muestra si la nube ha salido del contenedor
            nubes[i].parentNode.removeChild(nubes[i]); // Elimina la nube
            nubes.splice(i, 1); // Elimina la nube del array
        } else {
            nubes[i].posX -= CalcularDesplazamiento() * velNube; // Actualiza la posición X de la nube
            nubes[i].style.left = nubes[i].posX + "px"; // Ajusta la posición
        }
    }
}

// Aumenta la puntuación y actualiza el juego
function GanarPuntos() {
    score++; // Incrementa la puntuación
    textoScore.innerText = score; // Actualiza el texto de la puntuación
    if (score == 10) { // Si la puntuación es 10
        gameVel = 1.2; // Aumenta la velocidad del juego
        contenedor.classList.add("mediodia"); // Cambia el fondo a mediodía
    } else if (score == 30) { // Si la puntuación es 30
        gameVel = 1.6; // Aumenta la velocidad del juego
        contenedor.classList.add("tarde"); // Cambia el fondo a tarde
    } else if (score == 50) { // Si la puntuación es 50
        gameVel = 2; // Aumenta la velocidad del juego
        contenedor.classList.add("noche"); // Cambia el fondo a noche
    }
    suelo.style.animationDuration = (3 / gameVel) + "s"; // Ajusta la duración de la animación del suelo
}

// Muestra el mensaje de "Game Over"
function GameOver() {
    Estrellarse(); // Marca al dinosaurio como estrellado
    gameOver.style.display = "block"; // Muestra el mensaje de "Game Over"
}

// Detecta colisiones entre el dinosaurio y los obstáculos
function DetectarColision() {
    for (let i = 0; i < obstaculos.length; i++) {
        if (obstaculos[i].posX > dinoPosX + dino.clientWidth) {
            break; // Si el obstáculo está más allá del dinosaurio, sale del bucle
        } else {
            if (IsCollision(dino, obstaculos[i], 10, 30, 15, 20)) { // Verifica si hay colisión
                GameOver(); // Llama a la función de "Game Over"
            }
        }
    }
}

// Verifica si dos elementos colisionan
function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) || // Verifica si hay colisión en el eje vertical
        (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width - paddingRight) < bRect.left) || // Verifica si hay colisión en el eje horizontal
        (aRect.left + paddingLeft > (bRect.left + bRect.width))
    );
}
