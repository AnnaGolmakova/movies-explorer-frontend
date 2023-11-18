import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js'

function Header({ isAuthorized }) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className={`${location.pathname === "/" ? "header_main" : ""} header`} >
            <div className="header__container">
                <Link to="/">
                    <img src={logo} className="header__logo" alt="Лого" />
                </Link>
                {isAuthorized &&
                    <>
                        <nav className="header__navigation">
                            <ul className="header__navigation-items">
                                <li>
                                    <Link
                                        to="/movies"
                                        className={`header__navigation-item ${location.pathname === "/movies" ? "header__navigation-item_active" : ""}`}
                                    >
                                        Фильмы
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/saved-movies" className={`header__navigation-item ${location.pathname === "/saved-movies" ? "header__navigation-item_active" : ""}`}>Сохраненные фильмы</Link>
                                </li>
                            </ul>
                        </nav>
                        <button type="button" className="header__account-button" onClick={() => navigate("/profile")}>
                            Аккаунт
                        </button>
                        <Navigation className="menu-button" />
                    </>
                }
                {!isAuthorized &&
                    <div className="login-buttons">
                        <button type="button" className="registration-button" onClick={() => navigate("/signup")}>Регистрация</button>
                        <button type="button" className="login-button" onClick={() => navigate("/signin")}>Войти</button>
                    </div>
                }
            </div>
        </header >
    )
}

export default Header;