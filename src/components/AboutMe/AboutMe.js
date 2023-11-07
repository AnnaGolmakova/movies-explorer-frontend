import './AboutMe.css';

function AboutMe() {

    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="description">
                <h3 className="description__header">Анна</h3>
                <h4 className="description__occupation">Фронтенд-разработчик, 33 года</h4>
                <article className="description__details">Я живу в Екатеринбурге, закончила германское отеделение филологического факультета УрФУ. У меня есть муж и две дочки. Я люблю вышивать крестиком и учить новые языки. Пока что в моем арсенале английский, французский и немецкий.До недавнего времени я работала переводчиком. Некоторое время назад почувствовала в себе интерес к программированию. После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами.</article>
                <a href="https://github.com/AnnaGolmakova" className="description__github">Github</a>
                <a href=" " className="description__portfolio">Портфолио</a>
            </div>
        </section>
    );
}

export default AboutMe;