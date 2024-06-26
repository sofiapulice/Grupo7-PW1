let regexTarjetaCreditoPerfil = /^\d{16,19}$/;
let regexClaveCreditoPerfil = /^[1-9]{3}$/;
let regexCampoPassword = /^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-].*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>[\]\\/+=_-]{8,}$/;

function validarPerfil(event) {
  let errorPerfil = false;
  let mensajeErrorPerfil = "";
  document.getElementById("mensajePerfil").style.color = "red";

  const tarjetaPar = document.getElementById("tarjetaPerfil").value.trim();
  const claveC = document.getElementById("clavePerfil").value.trim();
  const password = document.getElementById("password").value;
  const repetirPassword = document.getElementById("repetir-password").value;
  const metodosDePago = document.querySelector('input[name="metodo--pago"]:checked');

  // Validacion de contraseña
  if (password === "" || repetirPassword === "") {
    errorPerfil = true;
    mensajeErrorPerfil += "<p>Completa ambos campos de contraseña</p>";
  } else if (password !== repetirPassword) {
    errorPerfil = true;
    mensajeErrorPerfil += "<p>Las contraseñas no coinciden</p>";
  } else if (!regexCampoPassword.test(password)) {
    errorPerfil = true;
    mensajeErrorPerfil += "<p>La contraseña no cumple con los requisitos</p>";
  }

  // Validaciones de métodos de pago
  if (!metodosDePago) {
    errorPerfil = true;
    mensajeErrorPerfil += "<p>Por favor, selecciona un método de pago</p>";
  } else if (metodosDePago.value === "tarjetaPerfil") {
    if (tarjetaPar === "") {
      errorPerfil = true;
      mensajeErrorPerfil += "<p>Completa el campo tarjeta</p>";
    } else if (!regexTarjetaCreditoPerfil.test(tarjetaPar)) {
      errorPerfil = true;
      mensajeErrorPerfil +=
        "<p>Número de tarjeta inválido. Debe tener entre 16 y 19 dígitos.</p>";
    } else {
      const digitos = tarjetaPar.split("").map(Number);
      const sumaDeTodoMenosElUltimo = digitos.slice(0, -1).reduce((acumulador, valor) => acumulador + valor, 0);
      const ultimoDigito = digitos[digitos.length - 1];

      if (
        (sumaDeTodoMenosElUltimo % 2 !== 0 && ultimoDigito % 2 === 0) ||
        (sumaDeTodoMenosElUltimo % 2 === 0 && ultimoDigito % 2 !== 0)
      ) {
        // Validación exitosa, no hacer nada
      } else {
        errorPerfil = true;
        mensajeErrorPerfil += "<p>Por favor, selecciona un método de pago</p>";
    }  if (metodosDePago.value === "tarjetaPerfil") {
        if (tarjetaPar === "") {
            errorPerfil = true;
            mensajeErrorPerfil += "<p>Completá el campo tarjeta</p>";
        } else if (!regexTarjetaCreditoPerfil.test(tarjetaPar)) {
            errorPerfil = true;
            mensajeErrorPerfil += "<p>Número de tarjeta inválido. Debe tener entre 16 y 19 dígitos.</p>";
        } else {
            const digitos = tarjetaPar.split('').map(Number);
            const sumaDeTodoMenosElUltimo = digitos.slice(0, -1).reduce((acumulador, valor) => acumulador + valor, 0);
            const ultimoDigito = digitos[digitos.length - 1];

            if ((sumaDeTodoMenosElUltimo % 2 !== 0 && ultimoDigito % 2 === 0) || (sumaDeTodoMenosElUltimo % 2 === 0 && ultimoDigito % 2 !== 0)) {
                // Validación exitosa, no hacer nada
            } else {
                errorPerfil = true;
                mensajeErrorPerfil += "<p>Tarjeta no válida</p>";
            }
        }

        if (claveC === "000" || claveC === "") {
            errorPerfil = true;
            mensajeErrorPerfil += "<p>¿Y la clave?</p>";
        } else if (!regexClaveCreditoPerfil.test(claveC)) {
            errorPerfil = true;
            mensajeErrorPerfil += "<p>Clave incorrecta: debe ser un número de 3 dígitos</p>";
        }
    } else if (metodosDePago.value === "cuponPerfil") {
        const pagoFacilPerfil = document.getElementById("pagoFacilPerfil").checked;
        const RapiPagoPerfil = document.getElementById("RapiPagoPerfil").checked;

        if (!pagoFacilPerfil && !RapiPagoPerfil) {
            errorPerfil = true;
            mensajeErrorPerfil += "<p>Por favor, selecciona Pago Facil o RapiPago</p>";
        }

        mensajeErrorPerfil += "<p>Tarjeta no válida</p>";
      }

    }

    if (claveC === "000" || claveC === "") {
      errorPerfil = true;
      mensajeErrorPerfil += "<p>¿Y la clave?</p>";
    } else if (!regexClaveCreditoPerfil.test(claveC)) {
      errorPerfil = true;
      mensajeErrorPerfil +=
        "<p>Clave incorrecta: debe ser un número de 3 dígitos</p>";
    }
  } else if (metodosDePago.value === "cuponPerfil") {
    const pagoFacilPerfil = document.getElementById("pagoFacilPerfil").checked;
    const RapiPagoPerfil = document.getElementById("RapiPagoPerfil").checked;

    if (!pagoFacilPerfil && !RapiPagoPerfil) {
      errorPerfil = true;
      mensajeErrorPerfil +=
        "<p>Por favor, selecciona Pago Facil o RapiPago</p>";
    }
  }

  if (errorPerfil) {
    document.getElementById("mensajePerfil").innerHTML = mensajeErrorPerfil;
    event.preventDefault();
  } else {
    window.location.href = "../Home/home.html";
  }

  //Para guardar en el LocalStorage

  let usuariosPerfil = JSON.parse(localStorage.getItem('usuariosPerfil')) || [];

  let textoMetodosDePago = metodosDePago.nextElementSibling.innerText;

    let datosUsuario = {
        contraseña: password,
        contraseñaRepetida: repetirPassword,
        numTarjeta: tarjetaPar,
        claveTarjeta: claveC,
        metPago: textoMetodosDePago
    };

    usuariosPerfil.push(datosUsuario);
    localStorage.setItem('usuariosPerfil', JSON.stringify(usuariosPerfil));
    /* return true; */

}

document.querySelector(".button-confirmar").addEventListener("click", validarPerfil);

document.querySelector(".contenedor__form").addEventListener("submit", function (event) {
    event.preventDefault();
  });
