import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/omdbApi";
import { useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const getMovieDetails = async () => {
      if (!movieId) {
        setError("Movie ID is missing");
        return;
      }

      try {
        const data = await fetchMovieDetails(movieId);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError("Movie not found");
        }
      } catch (error) {
        setError("Failed to load movie details.");
      }
    };

    getMovieDetails();
  }, [movieId]); 

  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-60 h-auto mt-4" />
      <p className="mt-2">Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
};

export default MovieDetailsPage;
