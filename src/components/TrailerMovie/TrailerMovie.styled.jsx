import { styled } from 'styled-components';

export const TrailerContainer = styled.div`
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }

  .modal-content {
    padding: 50px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }

  .close {
    position: absolute;
    top: -20px;
    right: 10px;
    font-size: 50px;
    color: #660000;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.5s;
  }

  .close:hover {
    color: #722121;
  }

  .video-title {
    position: relative;
    font-size: 18px;
    cursor: pointer;
    color: black;
    transition: color 0.5s;
    margin-top: 20px;
  }
  .video-title:hover {
    color: #660000;
  }

  .video-icon {
    position: absolute;
    top: -5px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }
`;
