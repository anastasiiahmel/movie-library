import { styled } from 'styled-components';

export const PopularMovieListStyle = styled.div`
  text-align: center;

  .hero-section-title {
    color: #660000;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .movie-list {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .movie-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    max-height: 500px;
    background-color: rgba(95, 6, 23, 0.3);
    border-radius: 5%;
    overflow: hidden;
    position: relative;
    transition: filter 0.5s;
  }

  .movie-preview:hover {
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }

  .movie-img {
    width: 100%;
    max-width: 400px;
    max-height: 500px;
    object-fit: cover;
  }

  .film-name {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  .movie-preview:hover .film-name,
  .movie-preview:focus .film-name {
    opacity: 1;
    pointer-events: all;
  }
`;
