import { useState } from 'react';
import './Profile.css';

function Profile({ onEdit, onLogout }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        setFormData({ ...formData, [name]: event.target.value })
        setErrors({ ...errors, [name]: event.target.validationMessage });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onEdit(formData);
    }

    function isEmpty() {
        return !formData.email || !formData.name
    }

    function isValid() {
        return errors.email || errors.name
    }

    return (
        <main className="profile">
            <section className="profile__content">
                <h1 className="profile__greeting">Привет, Анна!</h1>
                <form className="profile__fields" onSubmit={handleSubmit}>
                    <div className="profile__field">
                        <label htmlFor="username" className="profile__label">Имя</label>
                        <input
                            id="username"
                            name="name"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            className={`profile__data ${errors.name ? 'profile__data_error' : ''}`}
                            value={formData.name}
                            placeholder="Ваше имя"
                            required
                            onChange={handleChange}
                            pattern="[A-Za-z\u0400-\u04ff \-]+" />
                    </div>
                    <div className="profile__field">
                        <label htmlFor="email" className="profile__label">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            minLength="2"
                            maxLength="30"
                            className={`profile__data ${errors.email ? 'profile__data_error' : ''}`}
                            value={formData.email}
                            placeholder="example@example.ru"
                            required
                            onChange={handleChange}
                            pattern=".+@.+\..+" />
                    </div>
                </form>
                <div className='profile__buttons'>
                    <button
                        type="button"
                        className="profile-button"
                        disabled={isEmpty() || isValid()}
                        onClick={handleSubmit}
                    >
                        Редактировать
                    </button>
                    <button
                        type="button"
                        className="profile-button profile-button_exit"
                        onClick={() => onLogout()}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </section>
        </main >
    );
}

export default Profile;
