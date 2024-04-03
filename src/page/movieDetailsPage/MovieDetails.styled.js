import { styled } from 'styled-components';

export const MovieDetailsStyled = styled.section`
  .list-additional {
    cursor: pointer;
    list-style: none;
    background-color: #660000;
    width: 100px;
    color: white;
    transition: background-color 0.5s;
  }

  .list-additional:hover {
    background-color: #722121;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.2));
  }


.list{
  display: flex;
  gap: 10px;
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
    font-weight: 700;
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

  .information-title {
    padding: 8px 18px;
    color: white;
    background-color: #660000;
    width: 300px;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .info-link {
    display: inline-block;
    padding: 5px 15px;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: white;

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