document.addEventListener('DOMContentLoaded', function() {
  const generosDropdown = document.getElementById('Generos');
  const showGenresButton = document.querySelector('.generos');
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

  function filterContent() {
      const query = inputPelicula.value.toLowerCase();
      const selectedGenre = generosDropdown.value.toLowerCase();
      let resultadosEncontradosPeliculas = false;
      let resultadosEncontradosSeries = false;

      peliculas.forEach((pelicula) => {
          const title = pelicula.textContent.toLowerCase();
          const genres = pelicula.getAttribute('data-genres').toLowerCase();
          const matchesSearch = title.includes(query);
          const matchesGenre = selectedGenre === "" || genres.includes(selectedGenre);

          if (matchesSearch && matchesGenre) {
              pelicula.classList.remove("filtro");
              pelicula.style.display = 'block';
              resultadosEncontradosPeliculas = true;
          } else {
              pelicula.classList.add("filtro");
              pelicula.style.display = 'none';
          }
      });

      series.forEach((serie) => {
          const title = serie.textContent.toLowerCase();
          const genres = serie.getAttribute('data-genres').toLowerCase();
          const matchesSearch = title.includes(query);
          const matchesGenre = selectedGenre === "" || genres.includes(selectedGenre);

          if (matchesSearch && matchesGenre) {
              serie.classList.remove("filtro");
              serie.style.display = 'block';
              resultadosEncontradosSeries = true;
          } else {
              serie.classList.add("filtro");
              serie.style.display = 'none';
          }
      });

      const h2Peliculas = document.querySelector('#carouselPeliculas h2');
      const h2Series = document.querySelector('#carouselSeries h2');

      if (resultadosEncontradosPeliculas) {
          h2Peliculas.style.display = 'block';
      } else {
          h2Peliculas.style.display = 'none';
      }

      if (resultadosEncontradosSeries) {
          h2Series.style.display = 'block';
      } else {
          h2Series.style.display = 'none';
      }

      if (resultadosEncontradosPeliculas || resultadosEncontradosSeries) {
          mensajeNoResultados.style.display = 'none';
      } else {
          mensajeNoResultados.style.display = 'block';
      }

      if (query || selectedGenre) {
          ocultarPopulares();
      } else {
          mostrarPopulares();
      }
  }

  inputPelicula.addEventListener("keyup", filterContent);

  generosDropdown.addEventListener('change', filterContent);
  
  showGenresButton.addEventListener('click', function(e) {
      e.preventDefault();
      generosDropdown.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
      if (!e.target.closest('.generos') && !e.target.matches('.generos')) {
          generosDropdown.classList.remove('show');
      }
  });
});
