import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieSearchPage = lazy(() => import('../pages/MovieSearchPage'));
const MovieDetaisPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieFavoritePage = lazy(() => import('../pages/MovieFavoritePage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Revies = lazy(() => import('./Revies/Revies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/favorite" element={<MovieFavoritePage />} />
        <Route path="movies/:moviesID" element={<MovieDetaisPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Revies />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
