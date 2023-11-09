import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {

    return (
        <main className="not-found">
            <section className="not-found__container">
                <h1 className="not-found__error">404</h1>
                <p className="not-found__message">Страница не найдена</p>
            </section>
            <Link to="/" className="not-found__back">Назад</Link>
        </main >
    );
}

export default NotFound;