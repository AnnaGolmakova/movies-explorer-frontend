import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


function Login({ onLogin }) {

    return (
        <main className="register">
            <header className="header header_logo-only">
                <Link to="/"> <img src={logo} className="header__logo" alt="Лого" /></Link >
                <h1 className="register__greeting">Рады видеть!</h1>
            </header>
            <form>
                <div className="register__inputs">
                    <label for="email" className="form__field">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="register__input"
                        required
                    />
                    <span className="form__input-error email-input-error"></span>
                    <label for="password" className="form__field">Пароль</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="register__input register__input_error"
                        required
                    />
                    <span className="form__input-error password-input-error">Что-то пошло не так</span>
                </div>
                <button type="submit" className="save-button" onClick={onLogin}>Войти</button>
            </form >
            <div className="register__signup">
                <span>Еще не зарегистрированы?&nbsp;</span>
                <Link to="/signup" className="register__login-link">Регистрация</Link>
            </div>
        </main >
    );
}

export default Login;