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

export const getAllMovies = () => async dispatch => {
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
