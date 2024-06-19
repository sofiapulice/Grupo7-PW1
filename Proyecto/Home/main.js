document.addEventListener('DOMContentLoaded', function() {
    const generosDropdown = document.getElementById('generosDropdown');
    const showGenresButton = document.getElementById('showGenres');
    const generoLinks = document.querySelectorAll('.filtro-generos a');
    const peliculas = document.querySelectorAll('#carouselPeliculas .carousel-cell');
    const series = document.querySelectorAll('#carouselSeries .carousel-cell');
    const popularesContenedor = document.querySelector('.populares-contenedor');
    const carouselPeliculas = document.getElementById('carouselPeliculas');
    const carouselSeries = document.getElementById('carouselSeries');
    const linkPeliculas = document.querySelector('.nav-bar ul li:nth-child(1) a');
    const linkSeries = document.querySelector('.nav-bar ul li:nth-child(2) a');
    const linkInicio = document.querySelector('.logo a');
    const inputPelicula = document.getElementById('input-pelicula');

    function mostrarSoloCarouselPeliculas() {
        carouselPeliculas.style.display = 'block';
        carouselSeries.style.display = 'none';
        ocultarPopulares();
    }

    function mostrarSoloCarouselSeries() {
        carouselPeliculas.style.display = 'none';
        carouselSeries.style.display = 'block';
        ocultarPopulares();
    }

    function mostrarAmbosCarousels() {
        carouselPeliculas.style.display = 'block';
        carouselSeries.style.display = 'block';
        mostrarPopulares();
    }

    function ocultarPopulares() {
        popularesContenedor.style.display = 'none';
    }

    function mostrarPopulares() {
        popularesContenedor.style.display = 'block';
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

    // Busqueda
    inputPelicula.addEventListener("keyup", function(e) {
        const query = e.target.value.toLowerCase();
        if (query) {
            ocultarPopulares();
        } else {
            mostrarPopulares();
        }
        document.querySelectorAll(".carousel-cell").forEach((opcion) => {
            opcion.textContent.toLowerCase().includes(query)
                ? opcion.classList.remove("filtro")
                : opcion.classList.add("filtro");
        });
    });

    showGenresButton.addEventListener('click', function(e) {
        e.preventDefault();
        generosDropdown.classList.toggle('hide');
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.generos') && !e.target.matches('#showGenres')) {
            generosDropdown.classList.add('hide');
        }
    });

    generoLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedGenre = link.textContent.trim().toLowerCase();
            ocultarPopulares();
            peliculas.forEach(function(pelicula) {
                const peliculaGeneros = pelicula.getAttribute('data-genres').toLowerCase();
                if (peliculaGeneros.includes(selectedGenre)) {
                    pelicula.style.display = 'block';
                } else {
                    pelicula.style.display = 'none';
                }
            });
            series.forEach(function(serie) {
                const serieGeneros = serie.getAttribute('data-genres').toLowerCase();
                if (serieGeneros.includes(selectedGenre)) {
                    serie.style.display = 'block';
                } else {
                    serie.style.display = 'none';
                }
            });
        });
    });
});
