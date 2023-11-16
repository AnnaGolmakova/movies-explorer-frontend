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
import Message from '../Message/Message.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import { authorize, register, getUserInfo, setUserInfo, getMyMovies, createMovie, deleteMovie } from '../../utils/MainApi.js';
import RequestError from '../../errors/request-error.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    "name": "",
    "email": "",
    "movies": [],
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        console.log(res)
        setIsAuthorized(true)
        setCurrentUser({
          name: res.name,
          email: res.email
        })
      })
      .catch((err) => {
        setIsAuthorized(false)
      })
  }, [isAuthorized])

  useEffect(() => {
    if (isAuthorized) {
      getMyMovies().then((res) => {
        setCurrentUser({
          ...currentUser,
          movies: res
        })
      })
        .catch(console.log)
    }
  }, [currentUser, isAuthorized])

  function resetErrorMessage() {
    setErrorMessage(null);
  }

  function handleError(error) {
    console.log(error, error.code)
    if (error instanceof RequestError) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage("Что-то пошло не так! Попробуйте ещё раз.");
    }
  }

  function handleLogin(data) {
    authorize(data.email, data.password)
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies')
      })
      .catch(handleError)
  }

  function handleProfileEdit(data) {
    setUserInfo(data.email, data.name)
      .then((res) => {
        setCurrentUser({ ...currentUser, name: data.name, email: data.email })
      })
      .catch(handleError)
  }

  function handleRegister(data) {
    register(data.name, data.email, data.password)
      .then((res) => {
        setIsAuthorized(true);
        navigate('/movies')
      })
      .catch(handleError)
  }

  function handleLogout() {
    fetch(`http://localhost:3001/signout`, {
      method: 'GET',
      credentials: 'include'
    })
    setIsAuthorized(false);
    setCurrentUser({
      "name": "",
      "email": "",
      "movies": [],
    });
    navigate("/signin");
  }

  function handleAddMovie(movie) {
    createMovie(movie)
      .then()
      .catch(handleError)
  }


  return (
    <div className="page">
      {errorMessage &&
        <Message name="error" icon="error" isOpened={true} title={errorMessage} onClose={resetErrorMessage} />
      }
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
            <ProtectedRoute isAuthorized={isAuthorized}>
              <Header isAuthorized={isAuthorized} />
              <Profile onLogout={handleLogout} onEdit={handleProfileEdit} />
            </ProtectedRoute>
          } />
          <Route path="/movies" element={
            <ProtectedRoute isAuthorized={isAuthorized}>
              <Header isAuthorized={isAuthorized} />
              <Movies onLike={handleAddMovie} onDislike />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute isAuthorized={isAuthorized}>
              <Header isAuthorized={isAuthorized} />
              <SavedMovies movies={[]} />
              <Footer />
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
      </CurrentUserContext.Provider >
    </div >
  );
}

export default App;
