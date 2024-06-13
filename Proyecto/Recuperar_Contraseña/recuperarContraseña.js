let formRecu = document.querySelector("form");

formRecu.addEventListener("submit", (evento)=> {
    const usuarioRecuValidar = document.getElementById("usuarioRecu").value;
    const mailRecuValidar = document.getElementById("mailRecu").value;
    let divRecu = document.querySelector(".input-box");
    

    if (usuarioRecuValidar === '' || mailRecuValidar === '') {
        let comCampo = document.createElement("p");
        let completar = document.createTextNode("Los campos deben estar completos.");
        comCampo.appendChild(completar);
        divRecu.appendChild(comCampo);
        comCampo.style.color = "red";
        comCampo.style.fontStyle = "italic";
        comCampo.style.fontSize = "12px";
        evento.preventDefault();
    }
});



