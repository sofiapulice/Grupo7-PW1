function validarFormulario() {
    const usuarioValidar = document.getElementById("usuario").value;
    const contraseñaValidar = document.getElementById("contraseña").value;
    let errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === usuarioValidar && usuario.contraseña === contraseñaValidar);

    if (!usuarioEncontrado) {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Regístrese.";
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios && usuarios.length > 0) {
        const nombreUsuario = usuarios[usuarios.length - 1].email;
        const nombreUsuarioCSS = document.querySelector(".contenedor--usuario");
        if (nombreUsuarioCSS) {
            nombreUsuarioCSS.textContent = nombreUsuario;
            nombreUsuarioCSS.style.color = "#ee660c";
            nombreUsuarioCSS.style.fontSize = "1.7em";
            nombreUsuarioCSS.style.fontFamily = "sans-serif";
        }
    }
});

