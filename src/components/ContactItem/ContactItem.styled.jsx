import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Item = styled.li`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 0 auto;
  gap: 20px;
`;

export const Name = styled.span`
  font-weight: 500;
  text-align: left;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Number = styled.a`
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  font-size: 24px;
  text-align: right;
  text-decoration: none;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: rgba(0, 128, 0, 0.9);
  }
`;

export const Btn = styled.button`
  display: flex;
  gap: 8px;
  padding: 4px 10px;
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
`;
