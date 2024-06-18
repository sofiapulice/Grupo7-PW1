document.addEventListener('DOMContentLoaded', function() {
    const popularesContenedor = document.querySelector('.populares-contenedor');
    const carouselPeliculas = document.getElementById('carouselPeliculas');
    const carouselSeries = document.getElementById('carouselSeries');
    const linkPeliculas = document.querySelector('.nav-bar ul li:nth-child(1) a');
    const linkSeries = document.querySelector('.nav-bar ul li:nth-child(2) a'); 
    const linkInicio = document.querySelector('.logo a');

    function mostrarSoloCarouselPeliculas() {
        popularesContenedor.style.display = 'none';
        carouselPeliculas.style.display = 'block';
        carouselSeries.style.display = 'none';
    }

    function mostrarSoloCarouselSeries() {
        popularesContenedor.style.display = 'none';
        carouselPeliculas.style.display = 'none';
        carouselSeries.style.display = 'block';
    }

    function mostrarAmbosCarousels() {
        popularesContenedor.style.display = 'block';
        carouselPeliculas.style.display = 'block';
        carouselSeries.style.display = 'block';
    }

    
    mostrarAmbosCarousels();

    
    linkPeliculas.addEventListener('click', function(e) {
        e.preventDefault(); 
        mostrarSoloCarouselPeliculas();
    });

    linkSeries.addEventListener('click', function(e) {
        e.preventDefault(); 
        mostrarSoloCarouselSeries();
    });

    linkInicio.addEventListener('click', function(e) {
        e.preventDefault(); 
        mostrarAmbosCarousels();
    });
});

//BUSQUEDA
/*document.addEventListener("keyup", (e) => {
  if (e.target.matches("#input-pelicula")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".carousel-cell").forEach((opcion) => {
      opcion.textContent.includes(e.target.value)
        ? opcion.classList.remove("filtro")
        : opcion.classList.add("filtro");
    });
  }
});*/
