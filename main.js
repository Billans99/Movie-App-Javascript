// TMDB movie API 

const API_KEY = 'api_key=bad59878d09a26089638c2e2a1145651';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
    })
}