import './Main.css'
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';

function Main() {

    return (
        <main className="movies">
            <Promo />
            <NavTab />
        </main>
    );
}

export default Main;