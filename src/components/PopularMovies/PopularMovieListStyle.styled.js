import { styled } from 'styled-components';

export const PopularMovieListStyle = styled.div`
  text-align: center;

  .hero-section-title {
    font-weight: 800;
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
    max-width: 210px;
    max-height: 400px;
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    transition: background-color 0.5s;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
  .movie-img {
    max-width: 210px;
    max-height: 315px;
  }

  .movie-preview:hover {
    background-color: #722121;
  }

  .movie-preview:hover .film-name {
    color: #fff;
    font-size: 15px;
  }

  .film-name {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    min-height: 30px;
    width: 100%;
    transition: color 0.5s, font-size 0.5s;
  }

  .hero-section-title {
    font-size: 50px;
    color: #660000;
  }
`;
