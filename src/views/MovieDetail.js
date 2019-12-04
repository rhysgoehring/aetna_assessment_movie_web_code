import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "./state/actions";

class MovieDetail extends Component {
  componentDidMount() {
    const {
      location: { imdbId },
      getMovieDetails,
    } = this.props;
    getMovieDetails(imdbId);
  }

  render() {
    const {
      selectedMovie: { Poster, Title, imdbRating, Plot, Genre, Year, Runtime },
    } = this.props;
    return (
      <div className="movie-detail">
        <img className="movie-detail__image" src={Poster} alt={Title} />
        <div className="movie-detail__info">
          <div className="movie-detail__title">
            <h2 className="movie-detail__heading">{Title}</h2>
            <h2 className="movie-detail__heading">{imdbRating}/10</h2>
          </div>
          <p>{Plot}</p>
          <table className="movie-table">
            <tbody className="movie-table__body">
              <tr>
                <td className="movie-table__name">Genres</td>
                <td className="movie-table__value">{Genre}</td>
              </tr>
              <tr>
                <td className="movie-table__name">Release Year</td>
                <td className="movie-table__value">{Year}</td>
              </tr>
              <tr>
                <td className="movie-table__name">Runtime</td>
                <td className="movie-table__value">{Runtime}</td>
              </tr>
            </tbody>
          </table>
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
