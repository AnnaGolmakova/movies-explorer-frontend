import checkResponse from './checkResponse.js';

// const BASE_URL = `https://api.movies.golmakova.nomoredomainsrocks.ru`;
const BASE_URL = `http://localhost:3001`;


function request(url, options) {
    return fetch(url, options).then(checkResponse)
}

export const authorize = (email, password) => {
    return request(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
};

export const register = (name, email, password) => {
    return request(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
};

export const logout = () => {
    return request(`${BASE_URL}/signout`, {
        method: 'GET',
        credentials: 'include'
    })
};

export const getUserInfo = () => {
    return request(`${BASE_URL}/users/me`, {
        method: "GET",
        credentials: 'include'
    })
}

export const setUserInfo = (name, email) => {
    return request(`${BASE_URL}/users/me`, {
        method: "PATCH",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
}

export const getMyMovies = () => {
    return request(`${BASE_URL}/movies`, {
        method: "GET",
        credentials: 'include',
    })
}

export const createMovie = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
}) => {
    return request(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country: country,
            director: director,
            duration: duration,
            year: year,
            description: description,
            image: image,
            trailerLink: trailerLink,
            thumbnail: thumbnail,
            movieId: movieId,
            nameRU: nameRU,
            nameEN: nameEN,
        })
    })
}

export const deleteMovie = (movieID) => {
    return request(`${BASE_URL}/movies/${movieID}`, {
        method: "DELETE",
        credentials: 'include',
    })
}