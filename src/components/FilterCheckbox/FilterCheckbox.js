import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className="switch">
            <input type="checkbox" className="switch__input" />
            <span className="switch__slider" />
            Короткометражки
        </label>
    )
}

export default FilterCheckbox;