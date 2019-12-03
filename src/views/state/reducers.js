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
    default:
      return state;
  }
};
