// App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import RepoList from "./RepoList";
import FilterOptions from "./FilterOptions";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS for additional styling

const App = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ language: "", sort: "", order: "desc" });

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`, {
        params: {
          sort: filters.sort,
          order: filters.order,
          language: filters.language,
        },
      });
      setRepos(response.data.items);
    } catch (err) {
      setError("Failed to fetch data from GitHub API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4 p-4 bg-light rounded shadow">
      <h1 className="text-center text-primary mb-4">GitHub Repository Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions filters={filters} setFilters={setFilters} />
      {error && <p className="text-danger">{error}</p>}
      {loading ? <p>Loading...</p> : <RepoList repos={repos} />}
    </div>
  );
};

export default App;
