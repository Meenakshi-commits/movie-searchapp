import React, {useState} from "react";
import { fetchMovies } from "../services/omdbApi";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);

    const handleSearch = async () => {
     setPage(1);
     setMovies([]);
     setError('');
     await fetchMovieData(1);        }
    };


};
export default HomePage;