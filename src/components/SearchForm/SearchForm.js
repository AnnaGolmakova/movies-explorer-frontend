import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
    return (
        <form className="search-form">
            <input
                id="search"
                name="search"
                type="search"
                placeholder="Фильм"
                className="search-form__input"
            >
            </input>
            <button type="button" className="search-form__button">
            </button>
            <FilterCheckbox />
        </form>
    )
}

export default SearchForm;