function validarFormulario() {
    const usuarioValidar = document.getElementById("usuario").value;
    const contraseñaValidar = document.getElementById("contraseña").value;
    let divIniciarSesion = document.querySelector(".input-box");
    

    // Validar nombre de usuario
    if (usuarioValidar.length < 5) {
        let errorNombre = document.createElement("p");
        let mensajeError = document.createTextNode("El nombre de usuario debe tener al menos 5 caracteres.");
        errorNombre.appendChild(mensajeError);
        divIniciarSesion.appendChild(errorNombre);
        errorNombre.style.color = "red";
        errorNombre.style.fontStyle = "italic";
        errorNombre.style.fontSize = "12px";
        /* alert('El nombre de usuario debe tener al menos 5 caracteres.'); */
        return false;
    }

    localStorage.setItem('usuario', usuarioValidar);
    localStorage.setItem('contraseña', contraseñaValidar);
}



