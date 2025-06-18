import React from "react";
import "./SearchBar.css";
import { useRef } from "react";

const SearchBar = ({ setSearchTerm, onClear }) => {
  // creating useref to avoid using onchange, because it is triggering search as soon as I input
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="InputBar"
        ref={inputRef}
        placeholder="Search Boards..."
      />
      <button type="submit" className="SearchButton">
        Search
      </button>
      <button type="reset" className="ClearButton" onClick={onClear}>
        Clear
      </button>
    </form>
  );
};

export default SearchBar;
