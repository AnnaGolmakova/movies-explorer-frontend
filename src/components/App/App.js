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

import './App.css';


function App() {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  function onLogin() {
    setIsAuthorized(true);
    navigate('/')
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={
          <Register />
        } />
        <Route path="/signin" element={
          <Login onLogin={onLogin} />
        } />
        <Route path="/profile" element={
          <>
            <Header isAuthorized={isAuthorized} />
            <Profile />
          </>
        } />
        <Route path="/" element={
          <>
            <Header isAuthorized={isAuthorized} />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header isAuthorized={isAuthorized} />
            <Movies />
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
    </div>
  );
}

export default App;
