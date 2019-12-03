import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <div className="movie-item">
      <img className="movie-item__image" alt={movie.title} src={movie.poster} />
      <p className="movie-item__title">{movie.title}</p>
    </div>
  </Link>
);

export default MovieItem;
