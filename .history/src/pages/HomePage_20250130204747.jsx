import React, {useState} from "react";
import { fetchMovies } from "../services/omdbApi";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
    const [query,setQuery] = useState('');
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    


};
export default HomePage;