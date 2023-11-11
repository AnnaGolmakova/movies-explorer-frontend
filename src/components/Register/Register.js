import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';


function Register({ onRegister }) {

    return (
        <main className="register">
            <section className="register__heading">
                <Link to="/"> <img src={logo} className="register__logo" alt="Лого" /></Link >
                <h1 className="register__greeting">Добро пожаловать!</h1>
            </section>
            <section className="register__content">
                <form className="form">
                    <div className="register__inputs">
                        <label htmlFor="username" className="form__field">Имя</label>
                        <input
                            id="username"
                            name="name"
                            type="text"
                            min="2"
                            max="30"
                            className="register__input"
                            placeholder="Ваше имя"
                            required
                        />
                        <span className="form__error name-error"></span>
                        <label htmlFor="email" className="form__field">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="register__input"
                            placeholder="example@example.ru"
                            required
                        />
                        <span className="form__error email-error"></span>
                        <label htmlFor="password" className="form__field">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            min="6"
                            className="register__input register__input_error"
                            placeholder="Введите пароль"
                            required
                        />
                        <span className="form__error password-error">Что-то пошло не так</span>
                    </div>
                    <button type="submit" className="save-button" onClick={onRegister}>Зарегистрироваться</button>
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