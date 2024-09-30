import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesCast } from '../../api/api';
import NoPhoto from '../../assets/images/no-photo.jpg';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { moviesID } = useParams();

  const fetchMoviesCast = useCallback(async () => {
    try {
      const data = await getMoviesCast(moviesID);
      setMoviesCast(data);
    } catch (error) {
      console.error('Error fetching movie cast:', error.message);
    }
  }, [moviesID]);

  useEffect(() => {
    fetchMoviesCast();
  }, [fetchMoviesCast]);

  return (
    <CastList>
      <ul className="cast-list">
        {moviesCast.length === 0 ? (
          <p>There are no cast members.</p>
        ) : (
          moviesCast.map(({ id, profile_path, original_name, character }) => (
            <li className="cast-card" key={id}>
              <div className="cast-photo-div">
                <img
                  className="cast-photo"
                  width={170}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                      : NoPhoto
                  }
                  alt={original_name}
                />
              </div>
              <div className="cast-info">
                <p>Name: {original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </CastList>
  );
};

export default Cast;
