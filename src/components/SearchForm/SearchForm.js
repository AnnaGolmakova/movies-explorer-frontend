import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__container">
                <input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Фильм"
                    className="search-form__input"
                >
                </input>
                <button type="button" className="search-form__button" />
            </div>
            <FilterCheckbox />
        </form >
    )
}

export default SearchForm;