import { Link, useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound() {

    const navigate = useNavigate();

    return (
        <main className="not-found">
            <section className="not-found__container">
                <h1 className="not-found__error">404</h1>
                <p className="not-found__message">Страница не найдена</p>
            </section>
            <button onClick={() => navigate(-1)} className="not-found__back">Назад</button>
        </main >
    );
}

export default NotFound;