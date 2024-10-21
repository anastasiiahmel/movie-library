import { styled } from 'styled-components';

export const MovieDetailsStyled = styled.section`
  .list-additional {
    cursor: pointer;
    border-radius: 20px;
    list-style: none;
    background-color: #ffe6e6;
    width: 160px;
    transition: filter 0.5s;
    position: relative;
  }

  .list-additional:hover {
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
  }
  .cast-icon {
    position: absolute;
    top: 4px;
    margin-left: 5px;
    width: 20px;
    height: 30px;
  }

  .list {
    display: flex;
    gap: 10px;
    padding: 0px;
    margin-top: 20px;
  }

  .back-btn {
    color: #660000 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: 3px solid #fff;

    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, color 0.3s, border-color 0.5s;
  }
  .back-btn:hover {
    border-color: #660000 !important;
  }

  .back-link {
    padding: 0 25px;
  }
  .main-content {
    display: flex;
    gap: 20px;
  }

  .main-img {
    width: 100%;
    height: auto;
    max-width: 350px;
  }

  .main-decr {
    display: flex;
    margin-top: 50px;
    flex-direction: column;
  }

  .card-title {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .card-score {
    margin-bottom: 20px;
  }

  .card-overview {
    margin-bottom: 10px;
  }

  .text-overview {
    margin-bottom: 20px;
  }

  .genres-title {
    margin-bottom: 10px;
  }
  .genres-item {
    background-color: #ffe6e6;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 20px;
  }

  .info-link {
    display: inline-block;
    padding: 10px 40px;
    padding-right: 80px;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    color: #000;

    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;
  }

  .last-link {
    margin-bottom: 0;
  }
  .loading-subpage {
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: #660000;
  }
`;
