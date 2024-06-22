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

// Guardamos en un array para que se puedan registrar varios usuarios 

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let nuevoUsuario = {
        usuario: usuarioValidar,
        contraseña: contraseñaValidar
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

document.addEventListener("DOMContentLoaded", ()=>{
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios && usuarios.length > 0) {
        const nombreUsuario = usuarios[usuarios.length - 1].usuario;
        const nombreUsuarioCSS = document.querySelector(".contenedor--usuario");
        nombreUsuarioCSS.textContent = `${nombreUsuario}`;
        nombreUsuarioCSS.style.color = "orange";
        nombreUsuarioCSS.style.fontSize = "1.7em";
        nombreUsuarioCSS.style.fontFamily = "sans serif";
    }
});

