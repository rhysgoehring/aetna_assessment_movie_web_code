import MoviesService from "../../services/movies";

// export const getAllMovies = () => dispatch => {
//   MoviesService.getAllMovies().then(movies => {
//     dispatch({
//       type: "ALL_MOVIES_LOADED",
//       payload: {
//         movies,
//       },
//     });
//   });
// };

const getAllMovies = () => async dispatch => {
  try {
    const movies = await MoviesService.getAllMovies();
    dispatch({
      type: "ALL_MOVIES_LOADED",
      payload: {
        movies,
      },
    });
  } catch (error) {
    console.error("getAllMovies action error", error);
  }
};

const getMovieDetails = imdbId => async dispatch => {
  try {
    const movieDetails = await MoviesService.getMovieDetails(imdbId);
    console.log("movieDetails", movieDetails);
    dispatch({
      type: "MOVIE_DETAILS_LOADED",
      payload: {
        movieDetails,
      },
    });
  } catch (error) {
    console.error("getMovieDetails action error", error);
  }
};

export { getAllMovies, getMovieDetails };
