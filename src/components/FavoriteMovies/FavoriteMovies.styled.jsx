import styled from 'styled-components';

const ContainerFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  .message {
    background-color: rgba(255, 255, 255, 0.6);
    border: none;
    .ant-alert-icon {
      color: rgba(102, 0, 0, 0.8);
    }
  }
`;

export { ContainerFavorites };
