import { styled } from 'styled-components';

export const CastList = styled.div`
  margin-top: 20px;

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }

  .cast-card {
    color: white;
    font-size: 20px;
    list-style: none;
    width: 255px;
    background-color: #660000;
    border-radius: 4px;
    border: 0.1px solid #80808042;
    overflow: hidden;
  }

  .cast-photo {
    width: 100%;
    height: auto;
  }
`;
