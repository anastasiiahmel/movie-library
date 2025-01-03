import { styled } from 'styled-components';

export const CastList = styled.div`
  margin-top: 20px;

  .cast-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  .cast-card {
    display: flex;
  }
  .cast-photo-div {
    color: white;
    font-size: 15px;
    list-style: none;
    border-radius: 10px;
    border: 0.1px solid #80808042;
    overflow: hidden;
  }
  .cast-photo {
    width: 140px;
    height: 200px;
  }

  .no-poster {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  .cast-name {
    margin-bottom: 10px;
  }
  .cast-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 200px;
    font-size: 18px;
    background-color: rgba(255, 247, 247, 0.5);
    border-radius: 10px;
  }
`;
