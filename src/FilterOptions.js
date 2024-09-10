// FilterOptions.js
import React from "react";

const FilterOptions = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex justify-content-around mb-4">
      <select
        name="language"
        className="form-control w-25 rounded border-primary"
        value={filters.language}
        onChange={handleFilterChange}
      >
        <option value="">All Languages</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
      </select>
      <select
        name="sort"
        className="form-control w-25 rounded border-primary"
        value={filters.sort}
        onChange={handleFilterChange}
      >
        <option value="">Sort By</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Recently Updated</option>
      </select>
      <select
        name="order"
        className="form-control w-25 rounded border-primary"
        value={filters.order}
        onChange={handleFilterChange}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default FilterOptions;
