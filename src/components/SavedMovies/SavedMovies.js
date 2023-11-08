import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SavedMovies({ movies }) {

    return (
        <main className="saved-movies">
            <section className="search-section">
                <SearchForm />
                <FilterCheckbox />
            </section>
            <MoviesCardList movies={movies}></MoviesCardList>
        </main>
    );
}

export default SavedMovies;