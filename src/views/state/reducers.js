const initialState = {
  movies: [],
  selectedMovie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALL_MOVIES_LOADED":
      return {
        ...state,
        movies: action.payload.movies,
      };
    case "MOVIE_DETAILS_LOADED":
      return {
        ...state,
        selectedMovie: action.payload.movieDetails,
      };
    case "QUERIED_MOVIES_LOADED":
      return {
        ...state,
        movies: action.payload.moviesFromSearch,
      };
    default:
      return state;
  }
};
