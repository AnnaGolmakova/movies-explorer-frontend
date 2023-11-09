import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
    const navigate = useNavigate();

    return (
        <main className="profile">
            <section className="profile__content">
                <h1 className="profile__greeting">Привет, Анна!</h1>
                <div className="profile__fields">
                    <div className="profile__field">
                        <p className="profile__label">Имя</p>
                        <p className="profile__data">Анна</p>
                    </div>
                    <div className="profile__field">
                        <p className="profile__label">E-mail</p>
                        <p className="profile__data">ann.golmakova@gmail.com</p>
                    </div>
                </div>
                <div className='profile__buttons'>
                    <button type="button" className="profile-button">Редактировать</button>
                    <button type="button" className="profile-button profile-button_exit" onClick={() => navigate("/signin")}>Выйти из аккаунта</button>
                </div>
            </section>
        </main >
    );
}

export default Profile;
