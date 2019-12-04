import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleSearch from "./TitleSearch";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = e => {
    console.log("inputChange e", e.target.value);
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    console.log("searchSubmit", e);
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

export default App;
