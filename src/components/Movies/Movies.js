import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';


function Movies({ movies }) {

    return (
        <main className="movies">
            <section className="search-section">
                <SearchForm />
                <FilterCheckbox />
            </section>
            <MoviesCardList movies={movies}></MoviesCardList>
        </main>
    );
}

export default Movies;