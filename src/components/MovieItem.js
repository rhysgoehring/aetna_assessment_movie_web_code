import React, { useState } from "react";
import { Link } from "react-router-dom";
import HoverBox from "./HoverBox";

const MovieItem = ({ movie }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = e => {
    console.log("mouseOver e", movie);
    setHovering(true);
  };

  return (
    <div onFocus onMouseOver={handleMouseOver} onMouseLeave={() => setHovering(false)}>
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
          {hovering && <HoverBox />}
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
