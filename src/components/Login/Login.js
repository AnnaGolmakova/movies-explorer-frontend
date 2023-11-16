import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


function Login({ onLogin }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        setFormData({ ...formData, [name]: event.target.value })
        setErrors({ ...errors, [name]: event.target.validationMessage });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(formData);
    }

    function isEmpty() {
        return !formData.email || !formData.password
    }

    function isValid() {
        return errors.email || errors.password
    }


    return (
        <main className="login">
            <section className="login__heading">
                <Link to="/"> <img src={logo} className="login__logo" alt="Лого" /></Link >
                <h1 className="login__greeting">Рады видеть!</h1>
            </section>
            <section className="login__content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__inputs">
                        <label htmlFor="email" className="form__field">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            minLength="2"
                            maxLength="30"
                            className={`form__input ${errors.email ? 'form__input_error' : ''}`}
                            placeholder="example@example.ru"
                            required
                            onChange={handleChange}
                            pattern=".+@.+\..+"
                        />
                        <span className="form__input-error email-input-error">{errors.email}</span>
                        <label htmlFor="password" className="form__field">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            minLength="8"
                            className={`form__input ${errors.email ? 'form__input_error' : ''}`}
                            placeholder="Введите пароль"
                            required
                            onChange={handleChange}
                        />
                        <span className="form__input-error password-input-error">{errors.password}</span>
                    </div>
                    <button
                        type="submit" className="save-button" disabled={isEmpty() || isValid()}
                    >
                        Войти
                    </button>
                </form >
                <div className="login__signup">
                    <span>Еще не зарегистрированы?&nbsp;</span>
                    <Link to="/signup" className="login__login-link">Регистрация</Link>
                </div>
            </section>
        </main >
    );
}

export default Login;