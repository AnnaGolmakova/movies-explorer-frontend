import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__info">
                <article className="details">
                    <h3 className="details__header">Дипломный проект включал 5 этапов</h3>
                    <p className="details__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className="details">
                    <h3 className="details__header">На выполнение диплома ушло 5 недель</h3>
                    <p className="details__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <tr className="table-time">
                <td className="table-time__one">1 неделя</td>
                <td className="table-time__four">4 недели</td>
            </tr>
            <tr className="table-details">
                <td className="table-details__backend">Back-end</td>
                <td className="table-details__frontend">Front-end</td>
            </tr>
        </section>
    );
}

export default AboutProject;