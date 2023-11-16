import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MyMoviesContext } from '../../contexts/MyMoviesContext';

import './MoviesCard.css';

function MoviesCard({ movie, showDelete, onLike }) {
    const nameRU = movie.nameRU;
    const durationHours = Math.floor(movie.duration / 60);
    const durationMinutes = movie.duration % 60;
    const image = movie.image.url ? 'https://api.nomoreparties.co' + movie.image.url : movie.image;
    const trailer = movie.trailerLink;

    const currentUser = useContext(CurrentUserContext);
    const myMovies = useContext(MyMoviesContext);

    function handleLike() {
        if (!isLiked()) {
            onLike({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: 'https://api.nomoreparties.co' + movie.image.url,
                trailerLink: movie.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            });
        } else {
            return
        }
    }

    function isLiked() {
        return myMovies.some((myMovie) => myMovie.movieId === movie.id)
    }

    return (
        <li className="movies-card">
            <a href={trailer} className="movies-card__image-wrapper">
                <img src={image} className="movies-card__image" alt={nameRU} />
            </a>
            <div className="movies-card__details">
                <h2 className="movies-card__title">
                    {nameRU}
                </h2>
                <div className="movies-card__duration">
                    {durationHours !== 0 ? durationHours + 'ч ' : ''}{durationMinutes !== 0 ? durationMinutes + ' м' : ''}
                </div>
                {!showDelete ?
                    <button
                        type="button"
                        className={`like-button ${isLiked() ? 'like-button_active' : ''}`}
                        aria-label='Лайк'
                        onClick={handleLike}>
                        <svg className="heart" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.65242 1.89789L7.01419 2.24773L7.36168 1.8837C8.08219 1.12888 8.97817 0.5 10.1818 0.5C12.1019 0.5 13.5 2.02862 13.5 4C13.5 4.9368 13.0747 5.73587 12.3847 6.40496L7 11.3228L1.60992 6.40004L1.59988 6.39087L1.58936 6.38227C0.885614 5.80642 0.5 4.96765 0.5 4C0.5 2.02862 1.89813 0.5 3.81818 0.5C5.01333 0.5 5.90847 1.17846 6.65242 1.89789Z" />
                        </svg>
                    </button>
                    :
                    <button
                        type="button"
                        className="delete-button"
                        aria-label="Удалить"
                    />
                }
            </div>
        </li>
    );
}

export default MoviesCard;