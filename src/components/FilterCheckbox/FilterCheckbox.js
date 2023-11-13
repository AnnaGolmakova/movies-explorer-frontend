import './FilterCheckbox.css';

function FilterCheckbox({ onChange }) {
    return (
        <label className="switch">
            <input name="isShort" type="checkbox" className="switch__input" onChange={onChange} />
            <span className="switch__slider" />
            Короткометражки
        </label>
    )
}

export default FilterCheckbox;