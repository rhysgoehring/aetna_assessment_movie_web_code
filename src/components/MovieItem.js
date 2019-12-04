import React, { useState } from "react";
import { Link } from "react-router-dom";
import HoverBox from "./HoverBox";

const MovieItem = ({ movie, getDetails, name, year, rating, runtime }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
    getDetails(movie.imdbId);
  };

  return (
    <div
      onFocus={handleMouseOver}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setHovering(false)}
    >
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
          {hovering && <HoverBox name={name} year={year} rating={rating} runtime={runtime} />}
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
