import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import getMovies from '../../utils/MoviesApi.js';

import { useState, useEffect } from 'react';


function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getMovies()
            .then(result => {
                setMovies(result)
            })
            .catch(console.log)
            .finally(() => {
                setIsLoading(false);
            });
    }, [])

    return (
        <main className="movies">
            <section className="search-section">
                <SearchForm />
            </section>
            {isLoading &&
                <Preloader />
            }
            {!isLoading &&
                <MoviesCardList movies={movies}></MoviesCardList>
            }
        </main>
    );
}

export default Movies;