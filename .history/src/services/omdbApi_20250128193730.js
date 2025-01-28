import axios from "axios";
const API_KEY='http://www.omdbapi.com/?i=tt3896198&apikey=534f4e59';
const BASE_URL='https://www.omdbapi.com/';

export const fetchMovies = async (query,page=1) => {
    try{
        const reponse = await axios.get(BASE_URL,

        return reponse.data;        
    }
}
