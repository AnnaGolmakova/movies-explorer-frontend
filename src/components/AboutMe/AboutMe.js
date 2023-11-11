import './AboutMe.css';
import photo from '../../images/my-photo.jpg'

function AboutMe() {

    return (
        <section className="about-me" id="about">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__details">
                <article className="description">
                    <h3 className="description__header">Анна</h3>
                    <h4 className="description__occupation">Фронтенд-разработчик, 33 года</h4>
                    <p className="description__details">Я живу в Екатеринбурге, закончила германское отделение филологического факультета УрФУ. У меня есть муж и две дочки. Я люблю вышивать крестиком и учить новые языки. Пока что в моем арсенале английский, французский и немецкий. До недавнего времени я работала переводчиком. Некоторое время назад почувствовала в себе интерес к программированию. После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами.</p>
                    <a href="https://github.com/AnnaGolmakova" className="github" target="_blank" rel="noreferrer">Github</a>
                </article>
                <img src={photo} className="my-photo" alt="Анна Гольмакова"></img>
            </div>
        </section>
    );
}

export default AboutMe;