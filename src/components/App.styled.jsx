import styled from '@emotion/styled';

const size = {
  mobile: '320px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 850px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);

  @media ${device.tablet} {
    font-size: 44px;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;

  font-size: 18px;
  line-height: 1.8;
  color: rgba(47, 47, 47, 0.6);
`;

export const Info = styled.p`
  text-align: end;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const InfoLink = styled.a`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    color: rgba(0, 128, 0, 1);
  }
`;

