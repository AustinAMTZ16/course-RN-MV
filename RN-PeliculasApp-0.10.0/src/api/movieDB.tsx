import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a9b87e5e41289a0d5bdac9b96174bfeb',
        language: 'es-ES'
    }
});


export default movieDB;


