import NavTab from '../NavTab/NavTab.js';
import './Promo.css';

function Promo() {

    return (
        <section className="promo">
            <h1 className="promo__header">Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
            <NavTab />
        </section>
    );
}

export default Promo;