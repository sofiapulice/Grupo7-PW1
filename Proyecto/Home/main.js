document.addEventListener("DOMContentLoaded", function () {
    const inputBusqueda = document.getElementById("busqueda-pelicula");
    const popularesContenedor = document.getElementById("popularesContenedor");
    const carouselPeliculas = document.getElementById("carouselPeliculas");
    const carouselSeries = document.getElementById("carouselSeries");
    const linkPeliculas = document.querySelector('.color[href="../Home/home.html"]');
    const linkSeries = document.querySelectorAll('.color[href="../Home/home.html"]')[1];
    const mensajeNoResultados = document.getElementById("mensajeNoResultados");
    const h2Peliculas = document.getElementById("h2Peliculas");
    const h2Series = document.getElementById("h2Series");
    const generosSelect = document.getElementById("Generos");
  
    mostrarTodos();
  
    function mostrarSoloPeliculas() {
      popularesContenedor.style.display = "none";
      carouselPeliculas.style.display = "block";
      carouselSeries.style.display = "none";
    }
  
    function mostrarSoloSeries() {
      popularesContenedor.style.display = "none";
      carouselPeliculas.style.display = "none";
      carouselSeries.style.display = "block";
    }
  
    linkPeliculas.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSoloPeliculas();
    });
  
    linkSeries.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSoloSeries();
    });
  
    const linkInicio = document.querySelector(".home");
    linkInicio.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarTodos();
    });
  
    inputBusqueda.addEventListener("input", function () {
      const valorBusqueda = inputBusqueda.value.trim().toLowerCase();
  
      if (valorBusqueda === "") {
        mostrarTodos();
        return;
      }
  
    
      popularesContenedor.style.display = "none";
  
      const peliculasFiltradas = Array.from(
        carouselPeliculas.querySelectorAll(".carousel-cell")
      ).filter((pelicula) => {
        const titulo = pelicula
          .querySelector("a")
          .textContent.trim()
          .toLowerCase();
        return titulo.includes(valorBusqueda);
      });
  
      mostrarResultados(carouselPeliculas, peliculasFiltradas);
  
      const seriesFiltradas = Array.from(
        carouselSeries.querySelectorAll(".carousel-cell")
      ).filter((serie) => {
        const titulo = serie.querySelector("a").textContent.trim().toLowerCase();
        return titulo.includes(valorBusqueda);
      });
  
      mostrarResultados(carouselSeries, seriesFiltradas);
  
      if (peliculasFiltradas.length === 0 && seriesFiltradas.length === 0) {
        mensajeNoResultados.style.display = "block";
      } else {
        mensajeNoResultados.style.display = "none";
      }
    });
  
    function mostrarTodos() {
      popularesContenedor.style.display = "block";
      carouselPeliculas.style.display = "block";
      carouselSeries.style.display = "block";
  
      Array.from(carouselPeliculas.querySelectorAll(".carousel-cell")).forEach(
        (pelicula) => {
          pelicula.style.display = "block";
        }
      );
  
      Array.from(carouselSeries.querySelectorAll(".carousel-cell")).forEach(
        (serie) => {
          serie.style.display = "block";
        }
      );
  
      mensajeNoResultados.style.display = "none";
    }
  
    function mostrarResultados(carousel, elementosFiltrados) {
      Array.from(carousel.querySelectorAll(".carousel-cell")).forEach(
        (elemento) => {
          if (elementosFiltrados.includes(elemento)) {
            elemento.style.display = "block";
          } else {
            elemento.style.display = "none";
          }
        }
      );
    }
  
    generosSelect.addEventListener("change", function () {
      const generoSeleccionado = generosSelect.value.toLowerCase();
  
      popularesContenedor.style.display = "none";
  
      mostrarTodos();
  
      Array.from(carouselPeliculas.querySelectorAll('.carousel-cell')).forEach(pelicula => {
        const generos = pelicula.getAttribute('data-genres').toLowerCase().split(' ');
        if (generos.includes(generoSeleccionado)) {
          pelicula.style.display = 'block';
        } else {
          pelicula.style.display = 'none';
        }
      });
  
      Array.from(carouselSeries.querySelectorAll('.carousel-cell')).forEach(serie => {
        const generos = serie.getAttribute('data-genres').toLowerCase().split(' ');
        if (generos.includes(generoSeleccionado)) {
          serie.style.display = 'block';
        } else {
          serie.style.display = 'none';
        }
      });
  
      const peliculasFiltradas = Array.from(carouselPeliculas.querySelectorAll('.carousel-cell')).filter(pelicula => {
        return pelicula.style.display === 'block';
      });
  
      const seriesFiltradas = Array.from(carouselSeries.querySelectorAll('.carousel-cell')).filter(serie => {
        return serie.style.display === 'block';
      });
  
      if (peliculasFiltradas.length === 0 && seriesFiltradas.length === 0) {
        mensajeNoResultados.style.display = 'block';
      } else {
        mensajeNoResultados.style.display = 'none';
      }
    });
  });
