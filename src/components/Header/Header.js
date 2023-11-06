import './Header.css';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Лого" />
            <nav className="header__navigation">
                <ul className="header__navigation-items">
                    <li>
                        <a href=" " className="header__navigation-item header__navigation-item_active">Фильмы</a>
                    </li>
                    <li>
                        <a href=" " className="header__navigation-item">Сохраненные фильмы</a>
                    </li>
                </ul>
            </nav>
            <button type="button" className="header__account-button">
                Аккаунт
            </button>
        </header >
    )
}

export default Header;