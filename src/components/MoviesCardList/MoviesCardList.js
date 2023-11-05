import MoviesCard from '../MoviesCard/MoviesCard.js';
import './MoviesCardList.css'

function MoviesCardList({ movies }) {

    return (
        <section className="pictures">
            <ul className="movies-list">
                {movies.map((movie, i) => (
                    <MoviesCard
                        key={i}
                        movie={movie}
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