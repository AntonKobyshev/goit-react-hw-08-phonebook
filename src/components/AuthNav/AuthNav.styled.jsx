import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const AuthItem = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: rgba(0, 128, 0, 1);
  }
  &.active {
    color: rgba(0, 128, 0, 1);
  }
`;
