import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies({ movies }) {

    return (
        <main className="saved-movies">
            <section className="search-section">
                <SearchForm />
            </section>
            <MoviesCardList movies={movies} showDelete={true}></MoviesCardList>
        </main>
    );
}

export default SavedMovies;