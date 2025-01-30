import React, { useState } from "react";
import { fetchMovies } from "../services/omdbApi";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async () => {
    setPage(1);
    setMovies([]);
    setError("");
    await fetchMoviesData(1);
  };
};

const fetchMoviesData = async (page) => {
  setLoading(true);
  setError("");
  try {
    const data = await fetchMovies(query, page);
    if (data.Response === "True") {
      setMovies(data.search);
      setTotalResults(parseInt(data.totalResults, 10));
    } else {
      setError(data.Error || "No results found.");
    }
  } catch (error) {
    setError("Failed to fetch movies");
    setLoading(false);
  }
};

const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMoviesData(nextPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchMoviesData(prevPage);
    }
  };

  const totalPages = Math.floor(totalResults / 10);
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Movie Search App</h1>
<div className="flex gap-2 mb-4">
  <input
    type="text"
    placeholder="Search movies..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="border p-2 rounded w-full"
  />
  <button
    onClick={handleSearch}
    className="bg-blue-500 text-white p-2 rounded"
  >
    Search
  </button>
</div>
{error && <p className="text-red-500">{error}</p>}

  

  
export default HomePage;
