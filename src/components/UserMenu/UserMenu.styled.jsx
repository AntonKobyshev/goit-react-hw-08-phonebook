import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
`;

export const UserName = styled.span`
  font-weight: 700;
  color: rgba(0, 0, 0, 0.7);
`;

export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 8px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 0, 0, 0.6);
  border: 2px solid rgba(255, 0, 0, 0.6);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  :hover {
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(255, 0, 0, 0.6);
    background-color: rgba(255, 0, 0, 0.8);
  }

  @media ${device.tablet} {
    padding: 4px 8px;
  }
`;