import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css'

function MoviesCardList({ movies, showDelete }) {

    return (
        <section className="pictures">
            <ul className="movies-list">
                {movies.map((movie, i) => (
                    <MoviesCard
                        key={i}
                        movie={movie}
                        showDelete={showDelete}
                    />
                ))}
            </ul>
            <button
                type="button"
                className="more-button"
            >
                Еще
            </button>
        </section>
    );
}

export default MoviesCardList;