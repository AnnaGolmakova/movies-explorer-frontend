import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {

    return (
        <main className="not-found">
            <div className="not-found__container">
                <h2 className="not-found__error">404</h2>
                <p className="not-found__message">Страница не найдена</p>
            </div>
            <Link to="/" className="not-found__back">Назад</Link>
        </main >
    );
}

export default NotFound;