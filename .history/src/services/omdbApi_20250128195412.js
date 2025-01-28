import axios from "axios";
const API_KEY='http://www.omdbapi.com/?i=tt3896198&apikey=534f4e59';
const BASE_URL='https://www.omdbapi.com/';

export const fetchMovies = async (query,page=1) => {
    try{
        const reponse = await axios.get(BASE_URL,{
            params:{
                s:query,
                page:page,
                apikey:API_KEY
            },
        }
        );

        return reponse.data;        
    }catch(error){
        console.error('Error fetching movies'error);
        throw new Error('Failed to fetch movies');    }
};
export const fetchMovieDetails= async (id) => {
    try{
        const response = await axios.get(BASE_URL,{
            params:{
                i:id,
                apikey:API_KEY,
            }
        })
    }
    catch
}
