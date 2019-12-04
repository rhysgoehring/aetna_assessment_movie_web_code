import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies, getMoviesFromSearch, getMovieDetails } from "./state/actions";
import MovieItem from "../components/MovieItem";

class Home extends Component {
  componentDidMount() {
    const { location, getMoviesFromSearch, getAllMovies } = this.props;
    if (location.search === "") {
      getAllMovies();
    } else {
      const query = location.search.slice(3);
      getMoviesFromSearch(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { location, getAllMovies } = this.props;
    const locationChanged = location !== prevProps.location;

    if (locationChanged && location.search === "") {
      getAllMovies();
    }
  }

  getMovieDetails = imdbId => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getMovieDetails(imdbId);
  };

  render() {
    const {
      movies,
      selectedMovie: { Title, Year, imdbRating, Runtime },
    } = this.props;
    return (
      <div>
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              getDetails={this.getMovieDetails}
              name={Title}
              year={Year}
              rating={imdbRating}
              runtime={Runtime}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  selectedMovie: state.main.selectedMovie,
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getMoviesFromSearch: query => dispatch(getMoviesFromSearch(query)),
  getMovieDetails: imdbId => dispatch(getMovieDetails(imdbId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
