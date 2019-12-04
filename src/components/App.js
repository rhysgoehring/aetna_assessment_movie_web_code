/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMoviesFromSearch } from "../views/state/actions";
import TitleSearch from "./TitleSearch";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleInputChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.getMoviesFromSearch(this.state.query);
  };

  render() {
    return (
      <div className="app">
        <header>
          <Link to="/" alt="The Movie List" className="title">
            <h1 className="title">The Movie List</h1>
          </Link>
          <TitleSearch onChange={this.handleInputChange} onSubmit={this.handleSearchSubmit} />
        </header>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesFromSearch: query => dispatch(getMoviesFromSearch(query)),
});

export default connect(null, mapDispatchToProps)(App);
