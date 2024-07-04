const episodiosPorTemporada = {
        temporada1: 8,
        temporada2: 10,
        temporada3: 8,
        temporada4: 9,
        temporada5: 5,
        temporada6: 6,
        temporada7: 10,
        temporada8: 7,
        temporada9: 8,
    };
    
    function cargarCapitulos() {
        const temporadaSeleccionada = document.getElementById("temporadaSelect").value;
        const cantidadEpisodios = episodiosPorTemporada[temporadaSeleccionada];
    
        const episodioSelect = document.getElementById("episodioSelect");
        episodioSelect.innerHTML = "";
    
        for (let i = 1; i <= cantidadEpisodios; i++) {
            const opcionEpisodio = document.createElement("option");
            opcionEpisodio.text = `Episodio ${i}`;
            opcionEpisodio.value = `episodio${i}`;
            episodioSelect.appendChild(opcionEpisodio);
        }
    }
    
    cargarCapitulos();

let mostrarTrailer = document.getElementById("verTrailer");
let mostrarIframe = document.querySelector("iframe");

mostrarTrailer.addEventListener("click", ()=> {
        mostrarIframe.style.display = "block";
});

