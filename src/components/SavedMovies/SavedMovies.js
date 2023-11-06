import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies({ movies }) {

    return (
        <main className="saved-movies">
            <MoviesCardList movies={movies}></MoviesCardList>
        </main>
    );
}

export default SavedMovies;