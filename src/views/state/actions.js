import MoviesService from "../../services/movies";
import { history } from "../../store";

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

// `http://localhost:3000/?q=Time`

const getMoviesFromSearch = query => async dispatch => {
  try {
    const moviesFromSearch = await MoviesService.getMoviesFromSearch(query);
    dispatch({
      type: "QUERIED_MOVIES_LOADED",
      payload: {
        moviesFromSearch,
      },
    });
    console.log("history", history);
    // if (history.location.pathname === "/") {
    //   console.log("on home page");
    //   history.push('/')
    // } else {
    //   console.log("on MovieDetal page");
    // }
    history.push(`/?q=${query}`);
  } catch (error) {
    console.error("getMoviesFromSearch action error", error);
  }
};

export { getAllMovies, getMovieDetails, getMoviesFromSearch };
