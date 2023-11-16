import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css'
import { useState, useEffect } from 'react';

function MoviesCardList({ movies, showDelete, onLike, onDislike }) {
    const [moviesCount, setMoviesCount] = useState(12);
    const [increment, setIncrement] = useState(3);

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setMoviesCount(8);
            setIncrement(2);
        }
        if (window.innerWidth <= 767) {
            setMoviesCount(5);
        }

        let timer = null;

        function handleResize() {
            if (timer) return;

            window.innerWidth <= 1024 ? setIncrement(2) : setIncrement(3);

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
                            showDelete={showDelete}
                            onLike={onLike}
                            onDislike={onDislike}
                        />
                    ))}
                </ul>
                :
                <p className="movies-list__message">Ничего не найдено</p>
            }
            {movies.length > moviesCount &&
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