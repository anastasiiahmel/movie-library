import { styled } from 'styled-components';

export const ReviesContainer = styled.div`
  margin-top: 20px;

  .revies-item {
    padding: 20px 25px;
    background-color: #f2ead3;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
  }

  .revies-title {
    margin-bottom: 10px;
  }

  .revies-text {
    margin-bottom: 20px;
  }
  .revies-list {
    list-style-type: none;
  }
  .revies-warning {
    font-size: 50px;
    color: #660000;
    display: flex;
    justify-content: center;
  }
`;
