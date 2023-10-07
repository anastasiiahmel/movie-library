import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchedMovies } from '../../api/api';

import { Searchbar } from 'components/searchBar/SearchBar';
import PopularMoviesList from 'components/popularMovieList/PopularMovieList';

import { MoviePageStyle } from './moviePageStyle.styled';

const MoviePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

  
    const query = searchParams.get('query');


    const handleSubmit = query => {
        setSearchParams({ query: query });
        setSearchResults([]);
    };

    
    const fetchSearchedMovies = useCallback(async query => {
        try {
        setLoading(true);
        const data = await getSearchedMovies(query);
        setSearchResults(data.results);
      } 
      catch (error) {
        console.log(error.message);
      } 
      finally {
          setLoading(false);
        }
    }, []);
    
    
    useEffect(() => {
        if (!searchResults.length) {
          setLoading(false);
        }
    }, [searchResults]);
    
  
    useEffect(() => {
        if (!query) {
            return;
        }
        fetchSearchedMovies(query);
    }, [query, fetchSearchedMovies]);



    return (
        <MoviePageStyle>
            <Searchbar onSubmit={handleSubmit}/>
            {loading && (<div className='loading-movie-page'>Loading data...</div>)}
            <PopularMoviesList searchResults={searchResults}/>
        </MoviePageStyle>
    );
};



export default MoviePage;