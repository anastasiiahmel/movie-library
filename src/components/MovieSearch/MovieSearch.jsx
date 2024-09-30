import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchedMovies } from '../../api/api';

import { message } from 'antd';

import { Searchbar } from 'components/SearchBar/SearchBar';
import PopularMoviesList from 'components/PopularMovies/PopularMovieList';

import { MoviePageStyle } from './MovieSearch.styled';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
    setSearchResults([]);
  };

  const fetchSearchedMovies = useCallback(async query => {
    try {
      const data = await getSearchedMovies(query);
      if (data.results.length === 0) {
        message.error('We found nothing for this request!');
      }
      setSearchResults(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchedMovies(query);
  }, [query, fetchSearchedMovies]);

  return (
    <MoviePageStyle>
      <Searchbar onSubmit={handleSubmit} />
      <PopularMoviesList searchResults={searchResults} />
    </MoviePageStyle>
  );
};

export default MovieSearch;
