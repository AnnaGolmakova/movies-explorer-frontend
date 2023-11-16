import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import getMovies from '../../utils/MoviesApi.js';

import { useState, useEffect } from 'react';


function Movies({ onLike, onDislike }) {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [results, setResults] = useState(localStorage.getItem("results") ? JSON.parse(localStorage.getItem("results")) : []);
    const [query, setQuery] = useState(localStorage.getItem("query") ? localStorage.getItem("query") : '');
    const [shortsOnly, setShortsOnly] = useState(localStorage.getItem("shortsOnly") ? JSON.parse(localStorage.getItem("shortsOnly")) : false);

    useEffect(() => {
        localStorage.setItem("query", query);
        localStorage.setItem("results", JSON.stringify(results));
        localStorage.setItem("shortsOnly", shortsOnly);
    }, [query, shortsOnly, results]);

    useEffect(() => {
        if (movies.length !== 0) {
            setResults(movies
                .filter((movie) => shortsOnly ? isShort(movie) : true)
                .filter((movie) => isMatchedByName(query, movie))
            )
        }
    }, [movies, query, shortsOnly])

    function searchMovies(inputs) {
        if (movies.length === 0) {
            setIsLoading(true)
            getMovies()
                .then(result => {
                    setMovies(result);
                })
                .catch(console.log)
                .finally(() => {
                    setIsLoading(false);
                })
        }

        setShortsOnly(inputs.hasOwnProperty('isShort') ? inputs.isShort : false)
        setQuery(inputs.hasOwnProperty('query') ? inputs.query : query)
    }

    function isMatchedByName(query, movie) {
        if (query === '') return false;
        query = query.toLowerCase();
        return movie.nameRU.toLowerCase().indexOf(query) !== -1 || movie.nameEN.toLowerCase().indexOf(query) !== -1
    }

    function isShort(movie) {
        return movie.duration <= 40
    }

    return (
        <main className="movies">
            <section className="search-section">
                <SearchForm onSubmit={searchMovies} query={query} shortsOnly={shortsOnly} />
            </section>
            {isLoading &&
                <Preloader />
            }
            {!isLoading && query !== '' &&
                <MoviesCardList movies={results} onLike={onLike} onDislike={onDislike}></MoviesCardList>
            }
        </main>
    );
}

export default Movies;