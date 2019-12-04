import React from "react";

const TitleSearch = ({ onChange, onSubmit }) => {
  // const [query, setQuery] = useState("");
  return (
    <form onSubmit={onSubmit} className="title-search">
      <input
        type="text"
        onChange={onChange}
        className="title-search__input"
        placeholder="Find a movie..."
      />
      <button type="submit" className="title-search__button">
        Search
      </button>
    </form>
  );
};

export default TitleSearch;
