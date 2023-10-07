import { styled } from 'styled-components';

export const PopularMovieListStyle = styled.ul`
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
    gap: 20px;

    /* font-family: 'Times New Roman', Times, serif; */
  }

  .movie-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 210px;
    background-color: white;

    overflow: hidden;
  }

  .movie-img {
    width: 100%;
    height: auto;
  }

  .film-name {
    font-size: 20px;
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
