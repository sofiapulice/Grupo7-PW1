document.getElementById("formRecu").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioRecuValidar = document.getElementById("usuarioRecu").value;
    const mailRecuValidar = document.getElementById("mailRecu").value;
    let errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    if (usuarioRecuValidar === '' || mailRecuValidar === '') {
        errorMessage.textContent = "Los campos deben estar completos.";
        return;
    }

    // Recuperar usuarios registrados
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuarioEncontrado = usuarios.find(usuario => usuario.usuario === mailRecuValidar && usuario.nombre === usuarioRecuValidar);

    // Validar si el usuario está registrado
    if (!usuarioEncontrado) {
        errorMessage.textContent = "No se encontraron datos coincidentes. Verifique su nombre de usuario y correo electrónico.";
    } else {
        alert("Se ha enviado un correo de recuperación. Verifique su bandeja de entrada.");
    }
});
