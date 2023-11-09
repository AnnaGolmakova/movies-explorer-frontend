import './Portfolio.css';

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a
                        href="https://github.com/AnnaGolmakova/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__url"
                    >
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__link">
                    <a
                        href="https://github.com/AnnaGolmakova/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__url"
                    >
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__link">
                    <a
                        href="https://github.com/AnnaGolmakova/react-mesto-api-full-gha"
                        target="_blank"
                        rel="noreferrer" className="portfolio__url"
                    >
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;