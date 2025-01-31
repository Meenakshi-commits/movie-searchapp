import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => navigate(-1)} // ✅ Go back to the previous page
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        ⬅ Back
      </button>
      
      {error && <p className="text-red-500">{error}</p>}
      {!movie ? <p>Loading...</p> : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} className="w-60 h-auto mt-4" />
          <p className="mt-2">Year: {movie.Year}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      )}
    </div>
  );
};
