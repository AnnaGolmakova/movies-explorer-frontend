import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__details">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className="footer__links">
                    <li className="footer__yandex">
                        <a className="link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__github">
                        <a className="link" href="https://github.com/AnnaGolmakova">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer;