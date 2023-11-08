import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';


function Register() {

    return (
        <main className="register">
            <header className="header header_logo-only">
                <Link to="/"> <img src={logo} className="header__logo" alt="Лого" /></Link >
                <h1 className="register__greeting">Добро пожаловать!</h1>
            </header>
            <form>
                <div className="register__inputs">
                    <label for="username" className="form__field">Имя</label>
                    <input
                        id="username"
                        name="name"
                        type="text"
                        className="register__input"
                        required
                    />
                    <span className="form__input-error name-input-error"></span>
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
                <button type="submit" className="save-button">Зарегистрироваться</button>
            </form >
            <div className="register__signup">
                <span>Уже зарегистрированы?&nbsp;</span>
                <Link to="/sign-in" className="register__login-link">Войти</Link>
            </div>
        </main >
    );
}

export default Register;