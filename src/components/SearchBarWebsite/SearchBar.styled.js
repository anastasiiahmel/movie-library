import { styled } from 'styled-components';

export const SearchStyles = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;

  .search-icon {
    fill: #fff;
    transition: fill 0.3s, fill-opacity 0.3s;
    &:hover,
    &:focus {
      fill: #050505;
      fill-opacity: 0.5;
    }
  }
  .form {
    display: flex;
    gap: 10px;
    align-items: center;
    & button {
      max-height: 40px;
    }
  }

  .input {
    width: 340px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    outline: none;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
      0 1px 1px rgba(255, 255, 255, 0.2);
    -webkit-transition: box-shadow 0.5s ease;
    -moz-transition: box-shadow 0.5s ease;
    -o-transition: box-shadow 0.5s ease;
    -ms-transition: box-shadow 0.5s ease;
    transition: box-shadow 0.5s ease;
  }

  .input:focus {
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
      0 1px 1px rgba(255, 255, 255, 0.2);
  }

  .button-primary,
  .button-primary:hover {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }

  .button-primary {
    cursor: pointer;
    background-color: #660000;
    padding: 16px 18px;
    border: none;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    gap: 5px;
    color: white;
    height: 200px;
  }

  .button-primary:hover,
  .button-primary:active,
  .button-primary.active {
    filter: none;
    color: #f5f5f5;
    background-color: black;
  }
`;
