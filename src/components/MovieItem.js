import React from "react";

const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <img className="movie-item__image" alt={movie.title} src={movie.poster} />
    <p className="movie-item__title">{movie.title}</p>
  </div>
);

export default MovieItem;
