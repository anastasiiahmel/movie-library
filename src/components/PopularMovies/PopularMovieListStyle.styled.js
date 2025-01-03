import { styled } from 'styled-components';

export const PopularMovieListStyle = styled.section`
  text-align: center;

  .hero-section-title {
    color: #660000;
    font-size: 40px;
    margin-bottom: 30px;
  }
  .container-img {
    position: relative;
  }

  .btn-icon {
    position: absolute;
    z-index: 1000;
    border: none;
    background: none;
    padding: 10px;
    cursor: pointer;
    top: 10px;
    right: 15px;
  }
  .heart-filled {
    font-size: 20px;
    color: rgba(102, 0, 0, 0.6);
  }
  .heart-outlined {
    font-size: 20px;
    color: #dde1e9;
  }
  .movie-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
  }

  .movie-item {
    flex: 0 1 calc(5% - 10px);
    margin-bottom: 20px;
  }

  .movie-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: rgba(95, 6, 23, 0.3);
    border-radius: 5%;
    overflow: hidden;
    position: relative;
    transition: filter 0.5s;
  }
  .link-details {
    text-decoration: none;
    color: black;
  }

  .movie-preview:hover {
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }

  .movie-img {
    width: 300px;
    height: 450px;
    object-fit: cover;
  }

  .no-poster {
    width: 300px;
    height: 450px;
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
