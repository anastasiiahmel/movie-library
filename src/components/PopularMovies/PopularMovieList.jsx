import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PopularMovieListStyle } from './PopularMovieListStyle.styled';
import NoPoster from '../../assets/images/no-photo.jpg';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteMovies } from '..//..//redux/favoritesMovies/selectors';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '..//..//redux/favoritesMovies/slice';

const PopularMoviesList = ({ trendFilms, searchResults }) => {
  const location = useLocation();
  const [arrayList, setArrayList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isHomePage = location.pathname === '/';
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);

  useEffect(() => {
    const films = trendFilms || searchResults;
    if (films) {
      setArrayList(films);
    }
    setLoading(null);
  }, [trendFilms, searchResults]);

  const createMovieDetailsURL = movieID => `/movies/${movieID}`;

  const handleFavorite = (e, movie) => {
    e.preventDefault();
    if (favoriteMovies.some(fav => fav.id === movie.id)) {
      dispatch(removeFavoriteMovie(movie.id));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  };

  return (
    <PopularMovieListStyle>
      {isHomePage && <h1 className="hero-section-title">Trending Movies</h1>}
      {loading && <Loader />}
      <ul className="movie-list">
        {arrayList.map(movie => (
          <li className="movie-item" key={movie.id}>
            <div className="movie-preview">
              <Link
                className="link-details"
                to={createMovieDetailsURL(movie.id)}
                state={{ from: location }}
              >
                <div className="container-img">
                  <img
                    className={`movie-img ${
                      !movie.poster_path ? 'no-poster' : ''
                    }`}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                        : NoPoster
                    }
                    alt={movie.title}
                    onError={error => {
                      error.target.src = NoPoster;
                    }}
                  />
                  <button
                    className="btn-icon"
                    type="button"
                    onClick={e => handleFavorite(e, movie)}
                    shape="circle"
                  >
                    {favoriteMovies.some(fav => fav.id === movie.id) ? (
                      <HeartFilled className="heart-filled" />
                    ) : (
                      <HeartOutlined className="heart-outlined" />
                    )}
                  </button>
                </div>
                <p className="film-name">{movie.title}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </PopularMovieListStyle>
  );
};

export default PopularMoviesList;
