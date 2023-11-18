import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about-project" id="project">
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
            <table className="timeline">
                <tbody className="timeline__content">
                    <tr className="timeline__row">
                        <td className="timeline__cell timeline__cell_green">1 неделя</td>
                        <td className="timeline__cell timeline__cell_grey">4 недели</td>
                    </tr>
                    <tr className="timeline__row">
                        <td className="timeline__cell timeline__cell_description">Back-end</td>
                        <td className="timeline__cell timeline__cell_description">Front-end</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default AboutProject;