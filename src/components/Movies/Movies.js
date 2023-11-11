import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';


function Movies({ movies }) {
    const isLoading = false

    return (
        <main className="movies">
            {isLoading &&
                <Preloader />
            }
            {!isLoading &&
                <>
                    <section className="search-section">
                        <SearchForm />
                    </section>
                    <MoviesCardList movies={movies}></MoviesCardList>
                </>
            }
        </main>
    );
}

export default Movies;