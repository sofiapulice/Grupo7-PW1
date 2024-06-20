document.addEventListener('DOMContentLoaded', function() {
  const generosDropdown = document.getElementById('Generos');
  const showGenresButton = document.querySelector('.generos');
  const generoLinks = document.querySelectorAll('.generos-dropdown a');
  const peliculas = document.querySelectorAll('#carouselPeliculas .carousel-cell');
  const series = document.querySelectorAll('#carouselSeries .carousel-cell');
  const popularesContenedor = document.getElementById('popularesContenedor');
  const carouselPeliculas = document.getElementById('carouselPeliculas');
  const carouselSeries = document.getElementById('carouselSeries');
  const linkPeliculas = document.querySelector('.items li:nth-child(2) a');
  const linkSeries = document.querySelector('.items li:nth-child(3) a');
  const linkInicio = document.querySelector('.header.logo-titulo a');
  const inputPelicula = document.getElementById('busqueda-pelicula');
  const mensajeNoResultados = document.getElementById('mensajeNoResultados');

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

  // Búsqueda
  inputPelicula.addEventListener("keyup", function(e) {
      const query = e.target.value.toLowerCase();
      let resultadosEncontrados = false;
      if (query) {
          ocultarPopulares();
      } else {
          mostrarPopulares();
      }
      document.querySelectorAll(".carousel-cell").forEach((opcion) => {
          if (opcion.textContent.toLowerCase().includes(query)) {
              opcion.classList.remove("filtro");
              resultadosEncontrados = true;
          } else {
              opcion.classList.add("filtro");
          }
      });
      if (resultadosEncontrados) {
          mensajeNoResultados.style.display = 'none';
      } else {
          mensajeNoResultados.style.display = 'block';
      }
  });

 
  showGenresButton.addEventListener('click', function(e) {
      e.preventDefault();
      generosDropdown.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
      if (!e.target.closest('.generos') && !e.target.matches('.generos')) {
          generosDropdown.classList.remove('show');
      }
  });

  generosDropdown.addEventListener('change', function() {
      const selectedGenre = generosDropdown.value.toLowerCase();
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
