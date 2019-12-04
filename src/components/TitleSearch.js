import React from "react";

const TitleSearch = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="title-search">
      <input
        type="text"
        onChange={onChange}
        className="title-search__input"
        placeholder="Find a movie..."
      />
      <button onSubmit={onSubmit} type="submit" className="title-search__button">
        Search
      </button>
    </form>
  );
};

export default TitleSearch;
