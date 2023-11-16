import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

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

import { authorize, register, logout, getUserInfo, setUserInfo, getMyMovies, createMovie, deleteMovie } from '../../utils/MainApi.js';
import RequestError from '../../errors/request-error.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MyMoviesContext } from '../../contexts/MyMoviesContext';

import './App.css';

function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ _id: "", name: "", email: "" });
  const [myMovies, setMyMovies] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setIsAuthorized(true)
        setCurrentUser(res)
      })
      .catch((err) => {
        handleLogout();
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    if (isAuthorized) {
      getMyMovies().then((res) => {
        setMyMovies(res)
      })
        .catch(console.log)
    }
  }, [currentUser._id, isAuthorized]);

  function resetErrorMessage() {
    setErrorMessage(null);
  }

  function resetSuccessMessage() {
    setSuccessMessage(null);
  }

  function handleError(error) {
    console.log(error, error.code, error.body)
    if (error instanceof RequestError) {
      if (error.code === 400) {
        return setErrorMessage("Проверьте правильность заполнения данных");
      }
      return setErrorMessage(error.message);
    } else {
      setErrorMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
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
    setUserInfo(data.name, data.email)
      .then((res) => {
        setCurrentUser({ ...currentUser, name: data.name, email: data.email })
        setSuccessMessage("Вы успешно отредактировали профиль");
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
    logout().catch(console.log);
    setIsAuthorized(false);
    setCurrentUser({
      _id: "",
      name: "",
      email: "",
    });
    setMyMovies([]);
    navigate("/");
  }

  function handleAddMovie(movie) {
    createMovie(movie)
      .then((res) => setMyMovies([...myMovies, res]))
      .catch(handleError)
  }

  function handleDeleteMovie(id) {
    deleteMovie(id)
      .then((res) => setMyMovies(myMovies.filter((movie) => movie._id !== id)))
      .catch(handleError)
  }


  return (
    <div className="page">
      {errorMessage &&
        <Message name="error" icon="error" isOpened={true} title={errorMessage} onClose={resetErrorMessage} />
      }
      {successMessage &&
        <Message name="success" icon="done" isOpened={true} title={successMessage} onClose={resetSuccessMessage} />
      }
      {!isLoading &&
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
                <MyMoviesContext.Provider value={myMovies}>
                  <Header isAuthorized={isAuthorized} />
                  <Movies onLike={handleAddMovie} onDislike={handleDeleteMovie} />
                  <Footer />
                </MyMoviesContext.Provider >
              </ProtectedRoute>
            } />
            <Route path="/saved-movies" element={
              <ProtectedRoute isAuthorized={isAuthorized}>
                <MyMoviesContext.Provider value={myMovies}>
                  <Header isAuthorized={isAuthorized} />
                  <SavedMovies movies={myMovies} onLike={handleAddMovie} onDislike={handleDeleteMovie} />
                  <Footer />
                </MyMoviesContext.Provider >
              </ProtectedRoute>
            } />
            <Route path="*" element={
              <NotFound />
            } />
          </Routes>
        </CurrentUserContext.Provider >
      }
    </div >
  );
}

export default App;
