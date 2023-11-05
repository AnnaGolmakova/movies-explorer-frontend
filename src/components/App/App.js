import './App.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

const movie = {
  "_id": "653509696a52e53b04e7bb08",
  "country": "UK",
  "director": "Guy Ritchie",
  "duration": 116,
  "year": "2015",
  "description": "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization",
  "image": "https://upload.wikimedia.org/wikipedia/en/e/e5/The_Man_from_U.N.C.L.E._poster.jpg",
  "trailerLink": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjpua3N_YiCAxUaIxAIHTn0ABcQ3yx6BAgLEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4K4Iv_N9Nno&usg=AOvVaw2x9bahkE7PfOoLlXCZLcGA&opi=89978449",
  "thumbnail": "https://upload.wikimedia.org/wikipedia/en/e/e5/The_Man_from_U.N.C.L.E._poster.jpg",
  "owner": {
    "_id": "6533c269a42ecc0d66f26482",
    "email": "test@test.ru",
    "name": "Test",
    "__v": 0
  },
  "movieId": 123456789,
  "nameRU": "Агенты А.Н.К.Л",
  "nameEN": "A Man from UNCLE",
  "__v": 0
}

function App() {
  return (
    <MoviesCard movie={movie}></MoviesCard>
  );
}

export default App;
