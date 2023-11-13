import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import { useState, useEffect, useRef } from 'react';

function SearchForm({ query = '', shortsOnly = false, onSubmit, submitOnCheckboxChange = true }) {
    const [inputs, setInputs] = useState({});
    const searchField = useRef(null);

    useEffect(() => {
        searchField.current.value = query;
    }, [])

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs({ ...inputs, [name]: value })

        if (submitOnCheckboxChange && event.target.type === 'checkbox') {
            onSubmit({ [name]: value })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(inputs);
    }

    return (
        <form name="search" className="search-form" onSubmit={handleSubmit} >
            <div className="search-form__container">
                <input
                    id="search"
                    name="query"
                    type="search"
                    ref={searchField}
                    placeholder="Фильм"
                    className="search-form__input"
                    onChange={handleChange}
                    required
                >
                </input>
                <button type="submit" className="search-form__button" />
            </div>
            <FilterCheckbox onChange={handleChange} checked={shortsOnly} />
        </form >
    )
}

export default SearchForm;