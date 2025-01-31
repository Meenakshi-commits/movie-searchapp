import React, { useState } from 'react';
import { fetchMovies } from '../services/omdbApi';
import MovieCard from '../MovieCardomponents/MovieCard';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async () => {
    try {
      const data = await fetchMovies(query, 1);
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Failed to load movies.");
    }
  };
  
  const fetchMoviesData = async (page) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMovies(query, page);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults, 10));
      } else {
        setError(data.Error || 'No results found.');
      }
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <div className="flex items-center justify-center gap-4 mt-4">
  <button
    onClick={handlePreviousPage}
    disabled={page === 1 || loading}
    className={`p-2 flex items-center rounded ${page === 1 || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
  >
    <AiOutlineLeft className="mr-2" />
    Previous
  </button>

  <p>
    Page {page} of {totalPages || 1}
  </p>

  <button
    onClick={handleNextPage}
    disabled={page >= totalPages || loading}
    className={`p-2 flex items-center rounded ${page >= totalPages || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
  >
    Next
    <AiOutlineRight className="ml-2" />
  </button>
</div>
    </div>
  );
};

export default HomePage;
