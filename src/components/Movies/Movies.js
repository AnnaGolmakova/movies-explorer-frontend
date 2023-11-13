import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import getMovies from '../../utils/MoviesApi.js';

import { useState, useEffect } from 'react';


function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [shortsOnly, setShortsOnly] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getMovies()
            .then(result => {
                setMovies(result)
            })
            .catch(console.log)
            .finally(() => {
                console.log(movies)
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setResults(movies.filter((movie) => shortsOnly ? isShort(movie) : true).filter((movie) => isMatchedByName(query, movie)))
    }, [movies, query, shortsOnly])

    function searchMovies(inputs) {
        setShortsOnly(inputs.hasOwnProperty('isShort') ? inputs.isShort : false)
        setQuery(inputs.hasOwnProperty('query') ? inputs.query : '')
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
                <SearchForm onSubmit={searchMovies} />
            </section>
            {isLoading &&
                <Preloader />
            }
            {!isLoading &&
                <MoviesCardList movies={results}></MoviesCardList>
            }
        </main>
    );
}

export default Movies;