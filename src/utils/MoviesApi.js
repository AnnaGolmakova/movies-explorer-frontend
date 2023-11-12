const baseURL = 'https://api.nomoreparties.co/beatfilm-movies';

function _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

function getMovies() {
    return fetch(`${baseURL}`, {
        method: "GET"
    })
        .then((res) => _checkResponse(res))
}


export default getMovies;