import {API_KEY} from './api';
import axios from 'axios';


export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
// export const searchApi = async (keyword: string) => {
//     // return await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}${query.length && `&query=${query}`}`);
//     const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`);
//     // const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=batman`);
//     return res;
// }
// export const SEARCH_API = async () => {
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
//     );
//     return data;
//   };

// export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=avengers`;