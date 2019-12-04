const MoviesService = {
  getAllMovies: () =>
    fetch("http://localhost:3001/movies/all").then(response => {
      return response.json();
    }),
  getMovieDetails: id =>
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=c32d368e`).then(response => {
      return response.json();
    }),
  getMoviesFromSearch: query =>
    fetch(`http://localhost:3001/movies/search?s=${query}`).then(response => {
      return response.json();
    }),
};

export default MoviesService;
