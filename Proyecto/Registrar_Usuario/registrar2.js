//Para registrar paso 2 
 
let regexTarjetaCredito = /^\d{16,19}$/;
let regexClaveCredito = /^[1-9]{3}$/;


function validar2(event) {
    let error2 = false;
    let mensajeError2 = "";
    document.getElementById("mensaje2").style.color = "red";

    const tarjetaPar = document.getElementById("tarjetadecredito").value.trim();
    const claveC = document.getElementById("clavedecredito").value.trim();
    const metodosDePago = document.querySelector('input[name="metodosdepago"]:checked');

    if (!metodosDePago) {
        error2 = true;
        mensajeError2 += "<p>Por favor, selecciona un método de pago</p>";
    } else if (metodosDePago.value === "tarjetadecredito") {
        if (tarjetaPar === "") {
            error2 = true;
            mensajeError2 += "<p>Completa el campo tarjeta</p>";
        } else if (!regexTarjetaCredito.test(tarjetaPar)) {
            error2 = true;
            mensajeError2 += "<p>Número de tarjeta inválido. Debe tener entre 16 y 19 dígitos.</p>";
        } else {
            const digitos = tarjetaPar.split('').map(Number);
            const sumaDeTodoMenosElUltimo = digitos.slice(0, -1).reduce((acumulador, valor) => acumulador + valor, 0);
            const ultimoDigito = digitos[digitos.length - 1];

            if ((sumaDeTodoMenosElUltimo % 2 !== 0 && ultimoDigito % 2 === 0) || (sumaDeTodoMenosElUltimo % 2 === 0 && ultimoDigito % 2 !== 0)) {
                // Validación exitosa, no hacer nada
            } else {
                error2 = true;
                mensajeError2 += "<p>Tarjeta no válida</p>";
            }
        }

        if (claveC === "000" || claveC === "") {
            error2 = true;
            mensajeError2 += "<p>¿Y la clave?</p>";
        } else if (!regexClaveCredito.test(claveC)) {
            error2 = true;
            mensajeError2 += "<p>Clave incorrecta: debe ser un número de 3 dígitos</p>";
        }
    } else if (metodosDePago.value === "cupondepago") {
        const pagofacil = document.getElementById("pagofacil").checked;
        const rapipago = document.getElementById("rapipago").checked;

        if (!pagofacil && !rapipago) {
            error2 = true;
            mensajeError2 += "<p>Por favor, selecciona Pago Facil o RapiPago</p>";
        }
    }

    if (error2) {
        document.getElementById("mensaje2").innerHTML = mensajeError2;
        event.preventDefault();
    }
}

document.querySelector(".form").addEventListener("submit", validar2);