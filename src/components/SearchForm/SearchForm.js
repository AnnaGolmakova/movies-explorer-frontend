import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import { useState } from 'react';

function SearchForm({ onSubmit }) {
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs({ ...inputs, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(inputs);
    }

    return (
        <form name="search" className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
                <input
                    id="search"
                    name="query"
                    type="search"
                    placeholder="Фильм"
                    className="search-form__input"
                    onChange={handleChange}
                >
                </input>
                <button type="submit" className="search-form__button" />
            </div>
            <FilterCheckbox onChange={handleChange} />
        </form >
    )
}

export default SearchForm;