import checkResponse from './checkResponse.js';

const baseURL = 'https://api.nomoreparties.co/beatfilm-movies';

function getMovies() {
    return fetch(`${baseURL}`, {
        method: "GET"
    })
        .then((res) => checkResponse(res))
}


export default getMovies;