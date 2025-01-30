import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="border rounded shadow p-2">
            <img src=
            {movie.Poster!=='N/A'?movie.Poster:'https;//via.placeholder.com/150'} alt={movie.Title} className="w-full h-64 object-cover rounded" />
            <h3 className="mt-2 font-bold text-sm">{movie.Title}</h3>
            <p className="text-xs text-gray-500">{movie.Year}</p>

            <Link to={`/movie/${movie.imdbID}`} className="block bg-blue-500 text-white text-center py-1 rounded mt-2">
                View Details

    );

};
export default MovieCard;