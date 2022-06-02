
//For Movies
export const API_KEY = '8d7f83d8bfcf03d79c463477132fc11b';
export const URI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const baseurl = 'https://image.tmdb.org/t/p/w500';


//For Random Image
export const PHOTO_API_KEY ='lcHgXTuWSKov0M-eEm_kYtsmYbYWHwClBpIYiP8FNW4'
// export const PHOTO_API = `https://source.unsplash.com/400x300?`
export const PHOTO_API = `https://api.unsplash.com/photos/random/?client_id=${PHOTO_API_KEY}`



// export const fetchData= async () => {
//     try {
//     const request = await axios.get(URI);
//     return request.data;
//     } catch (err) {
//         console.log(err);
//     }
// }