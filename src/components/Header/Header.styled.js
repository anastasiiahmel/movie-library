import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 15px;

  &.active {
    color: white;
    background-color: #660000;
  }
`;
