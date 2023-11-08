import { useEffect, useState } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Register from '../Register/Register.js';

import { getMovies } from '../../utils/MoviesApi.js'

import './App.css';


function App() {

  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <div className="page">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/movies" element={
          <Movies movies={getMovies} />
        } />
        <Route path="/saved-movies" element={
          <SavedMovies movies={getMovies} />
        } />
        <Route path="/signup" element={
          <Register />
        } />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
