import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';


function Register({ onRegister }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        setFormData({ ...formData, [name]: event.target.value })
        setErrors({ ...errors, [name]: event.target.validationMessage });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onRegister(formData);
    }

    function isEmpty() {
        return !formData.email || !formData.password || !formData.name
    }

    function isValid() {
        return errors.email || errors.password || errors.name
    }

    return (
        <main className="register">
            <section className="register__heading">
                <Link to="/"> <img src={logo} className="register__logo" alt="Лого" /></Link >
                <h1 className="register__greeting">Добро пожаловать!</h1>
            </section>
            <section className="register__content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="register__inputs">
                        <label htmlFor="username" className="form__field">Имя</label>
                        <input
                            id="username"
                            name="name"
                            type="text"
                            minLength="2"
                            maxLength="30"
                            className={`register__input ${errors.name ? 'register__input_error' : ''}`}
                            placeholder="Ваше имя"
                            required
                            onChange={handleChange}
                            pattern="[A-Za-z\u0400-\u04ff \-]+"
                        />
                        <span className="form__error name-error">{errors.name}</span>
                        <label htmlFor="email" className="form__field">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`register__input ${errors.email ? 'register__input_error' : ''}`}
                            placeholder="example@example.ru"
                            required
                            onChange={handleChange}
                            pattern=".+@.+\..+"
                        />
                        <span className="form__error email-error">{errors.email}</span>
                        <label htmlFor="password" className="form__field">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            minLength="8"
                            className={`register__input ${errors.password ? 'register__input_error' : ''}`}
                            placeholder="Введите пароль"
                            required
                            onChange={handleChange}
                        />
                        <span className="form__error password-error">{errors.password}</span>
                    </div>
                    <button
                        type="submit" className="save-button" disabled={isEmpty() || isValid()}
                    >
                        Зарегистрироваться
                    </button>
                </form >
                <div className="register__signup">
                    <span>Уже зарегистрированы?&nbsp;</span>
                    <Link to="/signin" className="register__login-link">Войти</Link>
                </div>
            </section>
        </main >
    );
}

export default Register;