import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow p-2">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded"
      />
      <h3 className="mt-2 font-bold text-sm">{movie.Title}</h3>
      <p className="text-gray-500 text-xs">Year: {movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 text-sm underline mt-2 block">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;

