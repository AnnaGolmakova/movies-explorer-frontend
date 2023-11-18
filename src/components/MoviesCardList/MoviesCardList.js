import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css'
import { useState, useEffect } from 'react';

import { WIDTH_MOBILE, WIDTH_TABLET, MOVIES_PRELOADED, MOVIES_PRELOADED_TABLET, MOVIES_PRELOADED_MOBILE, MOVIES_LOADED, MOVIES_LOADED_TABLET, MOVIES_LOADED_MOBILE } from '../../constants.js';

function MoviesCardList({ movies, myList = false, onLike, onDislike }) {
    const [moviesCount, setMoviesCount] = useState(MOVIES_PRELOADED);
    const [increment, setIncrement] = useState(MOVIES_LOADED);

    useEffect(() => {
        if (window.innerWidth <= WIDTH_TABLET) {
            setMoviesCount(MOVIES_PRELOADED_TABLET);
            setIncrement(MOVIES_LOADED_TABLET);
        }
        if (window.innerWidth <= WIDTH_MOBILE) {
            setMoviesCount(MOVIES_PRELOADED_MOBILE);
            setMoviesCount(MOVIES_LOADED_MOBILE);
        }
        if (myList) {
            setMoviesCount(Infinity)
        }

        let timer = null;

        function handleResize() {
            if (timer) return;

            window.innerWidth <= WIDTH_TABLET ? setIncrement(MOVIES_LOADED_TABLET) : setIncrement(MOVIES_LOADED);

            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
            }, 50)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="pictures">
            {movies.length !== 0 ?
                <ul className="movies-list">
                    {movies.slice(0, moviesCount).map((movie, i) => (
                        <MoviesCard
                            key={movie.id ?? movie.movieId}
                            movie={movie}
                            showDelete={myList}
                            onLike={onLike}
                            onDislike={onDislike}
                        />
                    ))}
                </ul>
                :
                <p className="movies-list__message">Ничего не найдено</p>
            }
            {movies.length >= moviesCount &&
                <button
                    type="button"
                    className="more-button"
                    onClick={() => setMoviesCount(moviesCount + increment)}
                >
                    Еще
                </button>
            }

        </section>
    );
}

export default MoviesCardList;