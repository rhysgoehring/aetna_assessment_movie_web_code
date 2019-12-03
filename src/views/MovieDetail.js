import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "./state/actions";

class MovieDetail extends Component {
  componentDidMount() {
    const { imdbId } = this.props.location;
    // console.log("imdbId", imdbId);
    this.props.getMovieDetails(imdbId);
  }

  render() {
    return <div>Movie Detail</div>;
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.main.selectedMovie,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: imdbId => dispatch(getMovieDetails(imdbId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
