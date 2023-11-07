import './Techs.css';

function Techs() {

    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="technologies">
                <h3 className="technologies__header">7 технологий</h3>
                <p className="technologies__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="technologies__bar">
                    <li className="technologies__bar-item">
                        HTML
                    </li>
                    <li className="technologies__bar-item">
                        CSS
                    </li>
                    <li className="technologies__bar-item">
                        JS
                    </li>
                    <li className="technologies__bar-item">
                        React
                    </li>
                    <li className="technologies__bar-item">
                        Git
                    </li>
                    <li className="technologies__bar-item">
                        Express.js
                    </li>
                    <li className="technologies__bar-item">
                        MongoDB
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;