import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => (
  <Link
    className="link"
    to={{
      pathname: `/${movie.id}`,
      imdbId: movie.imdbId,
    }}
  >
    <div className="movie-item">
      <img className="movie-item__image" alt={movie.title} src={movie.poster} />
      <p className="movie-item__title">{movie.title}</p>
    </div>
  </Link>
);

export default MovieItem;
