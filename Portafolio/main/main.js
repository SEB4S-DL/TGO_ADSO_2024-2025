function validarFormulario() 
{
    const correo = document.getElementById('correo' ).value;
    if (!correo.includes('@')) 
        {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    return true;
}