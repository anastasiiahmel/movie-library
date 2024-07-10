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
    height: 400px;
    background-color: white;
    overflow: hidden;
    transition: filter 0.9s;
  }

  .movie-preview:hover {
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }

  .film-name {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    min-height: 48px;
    width: 100%;
  }
  .hero-section-title {
    font-size: 50px;
    color: #660000;
  }
`;
