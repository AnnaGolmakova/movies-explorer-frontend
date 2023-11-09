import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


function Login({ onLogin }) {

    return (
        <main className="login">
            <section className="login__heading">
                <Link to="/"> <img src={logo} className="login__logo" alt="Лого" /></Link >
                <h1 className="login__greeting">Рады видеть!</h1>
            </section>
            <section className="login__content">
                <form className="form">
                    <div className="form__inputs">
                        <label htmlFor="email" className="form__field">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            min="2"
                            max="30"
                            className="form__input"
                            placeholder="example@example.ru"
                            required
                        />
                        <span className="form__input-error email-input-error"></span>
                        <label htmlFor="password" className="form__field">Пароль</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            min="6"
                            className="form__input form__input_error"
                            placeholder="Введите пароль"
                            required
                        />
                        <span className="form__input-error password-input-error">Что-то пошло не так</span>
                    </div>
                    <button type="submit" className="save-button" onClick={onLogin}>Войти</button>
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