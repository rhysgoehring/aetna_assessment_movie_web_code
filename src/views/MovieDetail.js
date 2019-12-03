import React, { Component } from "react";

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
  }

  render() {
    return <div>Movie Detail</div>;
  }
}

export default MovieDetail;
