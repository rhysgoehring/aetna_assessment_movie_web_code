import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleSearch from "./TitleSearch";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link to="/" alt="The Movie List" className="title">
            <h1 className="title">The Movie List</h1>
          </Link>
          <TitleSearch />
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default App;
