import {Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { SharedLayout }  from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import('../page/homePage/HomePage'));
const MoviePage = lazy(() => import('../page/moviePage/MoviePage'));
const MovieDetaisPage = lazy(() => import ('../page/movieDetailsPage/MovieDetails'));
const Casts = lazy(() => import('./cast/Casts'));
const Revies = lazy(() => import('./revies/Revies'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="movies/:moviesID" element={<MovieDetaisPage />}>
          <Route path="cast" element={<Casts />} />
          <Route path="review" element={<Revies />} />
        </Route>  
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};











