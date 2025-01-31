import axios from "axios";
const API_KEY='534f4e59';
const BASE_URL='https://www.omdbapi.com/';

export const fetchMovies = async (query, page = 1) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { s: query, page, apikey: API_KEY },
      });
  
      console.log("Fetched Movies:", response.data); // Debugging
  
      if (response.data.Response === "False") {
        throw new Error(response.data.Error);
      }
  
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      throw new Error("Failed to fetch movies.");
    }
  };
  
  export const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: { i: id, apikey: API_KEY },
      });
  
      console.log("Fetched Movie Details:", response.data); // Debugging
  
      if (response.data.Response === "False") {
        throw new Error(response.data.Error);
      }
  
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
      throw new Error("Failed to fetch movie details.");
    }
  };
  