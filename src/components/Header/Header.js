import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className={location.pathname === "/" ? 'header header_main' : 'header'}>
            <Link to="/"><img src={logo} className="header__logo" alt="Лого" /></Link>
            {isAuthorized &&
                <nav className="header__navigation">
                    <ul className="header__navigation-items">
                        <li>
                            <Link to="/movies" className="header__navigation-item header__navigation-item_active">Фильмы</Link>
                        </li>
                        <li>
                            <Link to="/saved-movies" className="header__navigation-item">Сохраненные фильмы</Link>
                        </li>
                    </ul>
                </nav>
            }
            {isAuthorized &&
                <button type="button" className="header__account-button">
                    Аккаунт
                </button>
            }
            {isAuthorized &&
                <button type="button" className="menu-button" aria-label="Меню" />
            }
            {!isAuthorized ? (
                <div className="login-buttons">
                    <button type="button" className="registration-button">Регистрация</button>
                    <button type="button" className="login-button" onClick={() => setIsAuthorized(true)}>Войти</button>
                </div>
            ) : ''}
        </header >
    )
}

export default Header;