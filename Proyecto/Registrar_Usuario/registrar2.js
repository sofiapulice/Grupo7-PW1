//Para registrar paso 2 
 
let regexTarjetaCredito = /^\d{16,19}$/;
let regexClaveCredito = /^[1-9]{3}$/;


function validar2(event) {
    let error2=false;
    let mensajeError2="";
    document.getElementById("mensaje2").style.color="red";
    const tarjetaPar = document.getElementById("tarjetadecredito").value.trim();
    const claveC = document.getElementById("clavedecredito").value.trim();
    
    /* if (tarjetaPar == "") {
        error2=true;
        mensajeError2+="<p>Completa el campo</p>";
    } */
    if(claveC === "000" || claveC == ""){
            error2=true;
            mensajeError2+="<p>Campo no válido</p>";
    } else if (!regexClaveCredito.test(claveC)) {
        error2 = true;
        mensajeError2 += "<p>Clave incorrecta: debe ser un número de 3 dígitos</p>";
    }
    if (regexTarjetaCredito.test(tarjetaPar)) {
        const digitos = tarjetaPar.split('').map(Number);
        const sumaDeTodoMenosElUltimo = digitos.slice(0, -1).reduce((acumulador, valor) => acumulador + valor, 0);
        const ultimoDigito = digitos[digitos.length - 1];

    if (tarjetaPar == "" || sumaDeTodoMenosElUltimo % 2 !== 0 && ultimoDigito % 2 !== 0) {
          error2=true;
          mensajeError2+="<p>Tarjeta no válida</p>";
    } else if (sumaDeTodoMenosElUltimo % 2 === 0 && ultimoDigito % 2 === 0) {
          error2=true;
          mensajeError2+="<p>Tarjeta no válida</p>";  
        } 
    }
    if(error2){
        document.getElementById("mensaje2").innerHTML=mensajeError2;
        event.preventDefault();
    }
      
}   

document.querySelector(".form").addEventListener("submit", validar2); 