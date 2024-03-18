import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchedMovies } from '../../api/api';

import {message} from 'antd';

import { Searchbar } from 'components/searchBar/SearchBar';
import PopularMoviesList from 'components/popularMovieList/PopularMovieList';

import { MoviePageStyle } from './moviePageStyle.styled';
import { Loader } from 'components/loader/Loader';

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
              if (data.results.length === 0) {
             message.error("We found nothing for this request!")
             }
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
            {loading && <Loader/>}
            <PopularMoviesList searchResults={searchResults}/>
        </MoviePageStyle>
    );
};



export default MoviePage;