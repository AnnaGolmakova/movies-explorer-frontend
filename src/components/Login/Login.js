import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


function Login({ onLogin }) {

    return (
        <main className="login">
            <header className="header header_logo-only">
                <Link to="/"> <img src={logo} className="header__logo" alt="Лого" /></Link >
                <h1 className="login__greeting">Рады видеть!</h1>
            </header>
            <form className="login__form">
                <div className="login__inputs">
                    <label for="email" className="form__field">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="login__input"
                        required
                    />
                    <span className="form__input-error email-input-error"></span>
                    <label for="password" className="form__field">Пароль</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="login__input login__input_error"
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
        </main >
    );
}

export default Login;