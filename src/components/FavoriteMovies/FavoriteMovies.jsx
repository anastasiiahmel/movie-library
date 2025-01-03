import { useSelector } from 'react-redux';
import { Alert } from 'antd';

import { ContainerFavorites } from './FavoriteMovies.styled';
import PopularMoviesList from 'components/PopularMovies/PopularMovieList';
import { selectFavoriteMovies } from '../../redux/favoriteMovies/selectors';

const FavoriteMovies = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <ContainerFavorites>
      {favoriteMovies.length > 0 ? (
        <PopularMoviesList trendFilms={favoriteMovies} />
      ) : (
        <Alert
          className="message"
          message="Sorry, no favorite movies!"
          description="Add movies to your favorites so you don't lose them."
          type="info"
          showIcon
        />
      )}
    </ContainerFavorites>
  );
};

export default FavoriteMovies;
