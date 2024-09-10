// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control rounded-left"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for repositories..."
        style={{ borderRight: "none" }}
      />
      <div className="input-group-append">
        <button className="btn btn-primary rounded-right" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
