import React from "react";

const HoverBox = ({ name, year, runtime, rating }) => {
  return (
    <div className="hoverbox">
      <p className="hoverbox__text">{name}</p>
      <p className="hoverbox__text">{year}</p>
      <p className="hoverbox__text">{runtime}</p>
      <p className="hoverbox__text">{rating} / 10</p>
    </div>
  );
};

export default HoverBox;
