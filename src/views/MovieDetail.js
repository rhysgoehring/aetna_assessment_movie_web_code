import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "./state/actions";

class MovieDetail extends Component {
  componentDidMount() {
    const { imdbId } = this.props.location;
    this.props.getMovieDetails(imdbId);
  }

  render() {
    console.log(this.props.selectedMovie);
    const { selectedMovie } = this.props;
    return (
      <div className="movie-detail">
        <img className="movie-detail__image" src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <div className="movie-detail__info">
          <div className="movie-detail__title">
            <h2 className="movie-detail__heading">{selectedMovie.Title}</h2>
            <h2 className="movie-detail__heading">{selectedMovie.imdbRating}/10</h2>
          </div>
          <p>{selectedMovie.Plot}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.main.selectedMovie,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: imdbId => dispatch(getMovieDetails(imdbId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
