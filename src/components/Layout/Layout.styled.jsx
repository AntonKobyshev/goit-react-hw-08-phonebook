import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Main = styled.main`
  margin: 0;
`;

export const Wrapper = styled.div`
  padding: 24px;
  max-width: 960px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  @media ${device.tablet} {
    padding: 24px 36px;
  }
`;