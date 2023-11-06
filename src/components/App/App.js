import { useEffect, useState } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';

import Movies from '../Movies/Movies.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

import { getMovies } from '../../utils/MoviesApi.js'

import './App.css';


function App() {

  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/movies" element={
          <Movies movies={getMovies} />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
