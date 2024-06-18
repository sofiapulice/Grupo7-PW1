let regexCampoEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regexCampoPassword=/^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-].*[!@#$%^&*(),.?":{}|<>[\]\\/+=_-])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>[\]\\/+=_-]{8,}$/;
let regexCampoNA=/^[A-Za-z]+$/;
 

function validar (event){
    
    let error=false;
    let mensajeError="";
    document.getElementById("mensaje").style.color="red";

        //Valida campo nombre   
        if(document.getElementById("nombre").value==""){
            error=true;
            mensajeError+="<p>El campo nombre no puede estar vacío</p>";
        }
        //Valida campo apellido
        if(document.getElementById("apellido").value==""){
            error=true;
            mensajeError+="<p>El campo apellido no puede estar vacío</p>";
        }
        //Valida campo email
        if(!regexCampoEmail.test(document.getElementById("email").value)){
            error=true;
            mensajeError+="<p>Tiene que ingresar un email</p>";
        }
        //Valida la contraseña
        if(!regexCampoPassword.test(document.getElementById("password").value)){
            error=true;
            mensajeError+="<p>La contraseña no es válida</p>"; 
        }
        if (document.getElementById("password").value !== document.getElementById("repetirpassword").value) {
            error = true;
            mensajeError += "<p>Las contraseñas no coinciden</p>";
        }
        if(error){
            document.getElementById("mensaje").innerHTML=mensajeError;
            event.preventDefault();
        }
        
}

document.querySelector(".campos").addEventListener("submit", validar);

