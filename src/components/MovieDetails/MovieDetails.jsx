import { useState, useEffect, useCallback, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { LuClapperboard } from 'react-icons/lu';
import { MdOutlineReviews } from 'react-icons/md';

import { getMoviesDetailsById } from '../../api/api';
import { MovieDetailsStyled } from './MovieDetails.styled';
import NoPoster from '../../assets/images/no-photo.jpg';
import { Loader } from 'components/Loader/Loader';
import TrailerMovie from 'components/TrailerMovie/TrailerMovie';

const MovieDetails = () => {
  const { moviesID } = useParams();
  const location = useLocation();
  const [moviesInfo, setMoviesInfo] = useState({});
  const backLink = location.state?.from || '/';

  const fetchMoviesDetails = useCallback(async () => {
    try {
      const data = await getMoviesDetailsById(moviesID);
      setMoviesInfo(data);
    } catch (error) {
      console.error(error.message);
    }
  }, [moviesID]);

  useEffect(() => {
    fetchMoviesDetails();
  }, [fetchMoviesDetails]);

  const { title, release_date, vote_average, overview, genres, poster_path } =
    moviesInfo;
  const year = new Date(release_date).getFullYear();
  const score = Math.round(vote_average * 10);

  return (
    <>
      <MovieDetailsStyled>
        <Button className="back-btn" to={backLink}>
          <Link className="back-link" to={backLink}>
            Go back
          </Link>
        </Button>
        <div className="main-content">
          <img
            className="main-img"
            width={170}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : NoPoster
            }
            alt={title}
          />
          <div className="main-decr">
            <div>
              <h2 className="card-title">
                {title} ({year})
              </h2>
              <p className="card-score">User score {score} %</p>
              <h3 className="card-overview">Overview:</h3>
              <p className="text-overview">{overview}</p>
              <h3 className="genres-title">Genres:</h3>
              {genres &&
                genres.map(genre => (
                  <span className="genres-item" key={genre.id}>
                    {genre.name}{' '}
                  </span>
                ))}
              <TrailerMovie />
            </div>
            <div>
              <ul className="list">
                <li className="list-additional list-cast">
                  <Link
                    className="info-link"
                    to="cast"
                    state={{ from: backLink }}
                  >
                    CAST
                    <LuClapperboard className="cast-icon" />
                  </Link>
                </li>
                <li className="list-additional">
                  <Link
                    className="info-link last-link"
                    to="review"
                    state={{ from: backLink }}
                  >
                    REVIEWS
                    <MdOutlineReviews className="cast-icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MovieDetailsStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
