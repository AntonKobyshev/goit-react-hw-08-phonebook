import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Header = styled.header`
  padding: 24px;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  @media ${device.tablet} {
    padding: 24px 36px;
  }
`;