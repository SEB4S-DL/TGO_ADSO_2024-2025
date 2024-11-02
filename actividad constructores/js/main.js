// Inicializa una lista vacía que almacenará la información de los empleados
let milista = [];

// Constructor para crear objetos de tipo Empleado
function Empleado(nombre, apellido, fechaN, cargo) {
    this.nombre = nombre;      // Asigna el nombre del empleado
    this.apellido = apellido;  // Asigna el apellido del empleado
    this.fechaN = fechaN;      // Asigna la fecha de nacimiento del empleado
    this.cargo = cargo;        // Asigna el cargo del empleado
}

// Función para agregar un nuevo empleado a la lista
function aggEmpleado() {
    // Obtiene el valor del campo de entrada para el nombre
    let nom = document.getElementById("name").value;
    // Obtiene el valor del campo de entrada para el apellido
    let apellidoE = document.getElementById("apellido").value;
    // Obtiene el valor del campo de entrada para la fecha de nacimiento
    let feN = document.getElementById("fechan").value;
    // Obtiene el valor del campo de entrada para el cargo
    let crgo = document.getElementById("cargo").value;

    // Crea una nueva instancia de Empleado con los valores obtenidos
    let emplea = new Empleado(nom, apellidoE, feN, crgo);

    // Agrega el nuevo empleado a la lista
    milista.push(emplea);

    // Muestra un mensaje de confirmación
    alert("El usuario ha sido añadido correctamente");
}

// Función para mostrar todos los empleados en la lista
function mostrarEm() {
    // Inicializa un mensaje con el encabezado
    let mensaje = "Los usuarios que hay son:\n";
    
    // Recorre la lista de empleados
    for (let i = 0; i < milista.length; i++) {
        // Obtiene el empleado actual de la lista
        let empleado = milista[i];
        // Añade la información del empleado al mensaje
        mensaje += `Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, Fecha de Nacimiento: ${empleado.fechaN}, Cargo: ${empleado.cargo}\n`;
    }
    
    // Muestra todos los empleados en un alert
    alert(mensaje);
}
