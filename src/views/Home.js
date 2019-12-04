import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies, getMoviesFromSearch } from "./state/actions";
import MovieItem from "../components/MovieItem";

class Home extends Component {
  componentDidMount() {
    if (this.props.location.search === "") {
      console.log("no search");
      this.props.getAllMovies();
    } else {
      console.log("search time");
      const query = this.props.location.search.slice(3);
      this.props.getMoviesFromSearch(query);
    }
  }

  render() {
    return (
      <div>
        <div className="movie-grid">
          {this.props.movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
});

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getMoviesFromSearch: query => dispatch(getMoviesFromSearch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
