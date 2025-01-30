import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="border rounded shadow p-2">
            <img src={movie.Poster!=='N/A'?movie.Poster:'https;//via.placeholder.com/150'} alt={movie.Title} className="w-full h-64 object-cover" />

    );

};
export default MovieCard;