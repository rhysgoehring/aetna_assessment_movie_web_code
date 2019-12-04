import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies, getMoviesFromSearch, getMovieDetails } from "./state/actions";
import MovieItem from "../components/MovieItem";

class Home extends Component {
  componentDidMount() {
    if (this.props.location.search === "") {
      this.props.getAllMovies();
    } else {
      const query = this.props.location.search.slice(3);
      this.props.getMoviesFromSearch(query);
    }
  }

  componentDidUpdate(prevProps) {
    const locationChanged = this.props.location !== prevProps.location;

    if (locationChanged && this.props.location.search === "") {
      this.props.getAllMovies();
    }
  }

  getMovieDetails = imdbId => {
    console.log("imdbId", imdbId);
    this.props.getMovieDetails(imdbId);
  };

  render() {
    return (
      <div>
        <div className="movie-grid">
          {this.props.movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              getDetails={this.getMovieDetails}
              name={this.props.selectedMovie.Title}
              year={this.props.selectedMovie.Year}
              rating={this.props.selectedMovie.imdbRating}
              runtime={this.props.selectedMovie.Runtime}
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
