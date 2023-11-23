// TMDB movie API 

const API_KEY = 'api_key=bad59878d09a26089638c2e2a1145651';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="./movie.jpeg" alt="A picture of a movie cinema">
            
                <div class="movieInfo">
                    <h3>
                        Movie Title
                    </h3>

                    <span class="green">
                        9.8
                    </span>
                </div>

                <div class="overview">
                    <h3 class="homeColor">Overview</h3>
                    lorem ispum blah blah blah lorem ispum blah blah blah lorem ispum blah blah blah lorem ispum blah blah blah lorem ispum blah blah blah
                </div>
        
        
        `
    })
}