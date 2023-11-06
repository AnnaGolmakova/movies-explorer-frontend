import './SearchForm.css';

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
        </form>
    )
}

export default SearchForm;