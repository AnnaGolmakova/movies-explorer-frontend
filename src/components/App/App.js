import { useEffect, useState } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';

import { authorize, register, getUserInfo, setUserInfo, getMyMovies, createMovie, deleteMovie } from '../../utils/MainApi.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    "name": "",
    "email": "",
    "movies": [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized) {
      getUserInfo()
        .then((res) => {
          console.log(res)
          setCurrentUser({
            name: res.name,
            email: res.email
          })
        })
        .catch(() => {
          setIsAuthorized(false)
        })
      getMyMovies().then((res) => {
        setCurrentUser({
          ...currentUser,
          movies: res
        })
      })
    }
  }, [isAuthorized])


  function handleLogin(data) {
    authorize(data.email, data.password)
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies')
      })
      .catch(console.log)
  }

  function handleProfileEdit(data) {
    setUserInfo(data.email, data.name)
      .then((res) => {
        setCurrentUser({ ...currentUser, name: data.name, email: data.email })
      })
      .catch(console.log)
  }


  function handleRegister(data) {
    register(data.name, data.email, data.password)
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies')
      })
      .catch(console.log)
  }

  function handleLogout() {
    setIsAuthorized(false);
    navigate("/signin");
  }

  function handleAddMovie(movie) {
    createMovie(movie)
      .then()
      .catch(console.log)
  }



  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={
            <Register onRegister={handleRegister} />
          } />
          <Route path="/signin" element={
            <Login onLogin={handleLogin} />
          } />
          <Route path="/" element={
            <>
              <Header isAuthorized={isAuthorized} />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header isAuthorized={isAuthorized} />
              <Profile onLogout={handleLogout} onEdit={handleProfileEdit} />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header isAuthorized={isAuthorized} />
              <Movies onLike={handleAddMovie} onDislike />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header isAuthorized={isAuthorized} />
              <SavedMovies movies={[]} />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
