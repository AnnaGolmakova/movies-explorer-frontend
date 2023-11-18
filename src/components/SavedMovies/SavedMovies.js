import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

import { useState, useEffect } from 'react';

function SavedMovies({ movies, onLike, onDislike }) {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');
    const [shortsOnly, setShortsOnly] = useState(false);

    useEffect(() => {
        if (movies.length !== 0) {
            setResults(movies
                .filter((movie) => shortsOnly ? isShort(movie) : true)
                .filter((movie) => query !== '' ? isMatchedByName(query, movie) : true)
            )
        }
    }, [movies, query, shortsOnly])

    function searchMovies(inputs) {
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
        <main className="saved-movies">
            <section className="search-section">
                <SearchForm onSubmit={searchMovies} shortsOnly={shortsOnly} />
            </section>
            <MoviesCardList
                movies={results}
                showDelete={true}
                onLike={onLike}
                onDislike={onDislike}
                myList={true}
            />
        </main>
    );
}

export default SavedMovies;