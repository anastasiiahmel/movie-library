import { styled } from 'styled-components';

export const CastList = styled.div`
  margin-top: 20px;

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
 
  }

  .cast-card {
    display: flex;
  }
  .cast-photo-div {
    color: white;
    font-size: 15px;
    list-style: none;
    width: 100px;
    height: 150px;

    border-radius: 10px;
    border: 0.1px solid #80808042;
    overflow: hidden;
  }
  .cast-photo {
    width: 100px;
    height: 150px;
  }
  .cast-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    height: 150px;
    font-size: 18px;
    color: black;
    background-color: 	#fff7f7;
    border-radius: 10px;
  }
`;