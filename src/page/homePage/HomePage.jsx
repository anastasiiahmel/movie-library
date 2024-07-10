import { useEffect, useState, useCallback } from 'react';

import { getPopularMovies } from '..//../api/api';

import PopularMoviesList from 'components/PopularMovies/PopularMovieList';

const HomePage = () => {
  const [popular, setPopular] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await getPopularMovies();
      setPopular(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <PopularMoviesList trendFilms={popular} />
    </>
  );
};

export default HomePage;
