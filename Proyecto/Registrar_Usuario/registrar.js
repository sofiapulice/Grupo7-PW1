let regexCampoEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regexCampoPassword=/^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-].*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-].*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>[\]\\/+=_-]{9,}$/;
let regexCampoNA=/^[A-Za-z]+$/;
 

function validar(event) {
    let error = false;
    let mensajeError = "";
    document.getElementById("mensaje").style.color = "red";

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repetirPassword = document.getElementById("repetirpassword").value;

    // Validar campo nombre
    if (nombre === "") {
        error = true;
        mensajeError += "<p>El campo nombre no puede estar vacío</p>";
    }
    // Validar campo apellido
    if (apellido === "") {
        error = true;
        mensajeError += "<p>El campo apellido no puede estar vacío</p>";
    }
    // Validar campo email
    if (!regexCampoEmail.test(email)) {
        error = true;
        mensajeError += "<p>Tiene que ingresar un email válido</p>";
    }
    // Validar la contraseña
    if (!regexCampoPassword.test(password)) {
        error = true;
        mensajeError += "<p>La contraseña no es válida, debe contener al menos 3 letras, 3 números y 3 caracteres especiales</p>";
    }
    if (password !== repetirPassword) {
        error = true;
        mensajeError += "<p>Las contraseñas no coinciden</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        event.preventDefault();
        return false;
    }

    // Guardar los datos en localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let nuevoUsuario = {
        usuario: email,
        contraseña: password,
        nombre: nombre,
        apellido: apellido
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

document.querySelector(".campos").addEventListener("submit", validar);


