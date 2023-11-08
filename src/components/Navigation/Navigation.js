import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';


import './Navigation.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const dialog = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal();
        }
    }, [isOpen, dialog]);

    function open() {
        setIsOpen(true);
    }

    function close() {
        dialog.current.close();
    }

    return (
        <>
            <button
                type="button"
                className="menu-button"
                aria-label="Меню"
                onClick={() => open()}
            />
            <dialog
                className="navigation"
                ref={dialog}
                onClose={() => setIsOpen(false)}
            >
                <button type="button" className="close-button" aria-label="Закрыть" onClick={() => close()}>
                </button>
                <ul className="navigation__list">
                    <li>
                        <Link
                            to="/"
                            className={`navigation-item ${location.pathname === "/" ? "navigation-item_active" : ""}`}
                            onClick={() => close()}
                        >
                            Главное
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/movies"
                            className={`navigation-item ${location.pathname === "/movies" ? "navigation-item_active" : ""}`}
                            onClick={() => close()}
                        >
                            Фильмы
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/saved-movies"
                            className={`navigation-item ${location.pathname === "/saved-movies" ? "navigation-item_active" : ""}`}
                            onClick={() => close()}
                        >
                            Сохраненные фильмы
                        </Link>
                    </li>
                </ul>
                <button type="button" className="account-button" onClick={() => {
                    close();
                    navigate("/profile");
                }}>
                    Аккаунт
                </button>
            </dialog >
        </>
    );
}

export default Navigation;