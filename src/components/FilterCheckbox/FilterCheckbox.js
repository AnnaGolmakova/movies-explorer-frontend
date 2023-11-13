import './FilterCheckbox.css';

function FilterCheckbox({ checked = false, onChange }) {
    console.log('Чекбокс состояние', checked)
    return (
        <label className="switch">
            <input name="isShort" type="checkbox" className="switch__input" onChange={onChange} checked={checked} />
            <span className="switch__slider" />
            Короткометражки
        </label>
    )
}

export default FilterCheckbox;