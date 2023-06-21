import styled from 'styled-components';
import { NavItemLink } from '../components/Navigation/Navigation.styled';
import { BiError } from 'react-icons/bi';

export const NotFoundPage = () => {
  return (
    <>
      <ErrorTitle>Error 404</ErrorTitle>
      <BiError style={iconStyle} />
      <ErrorText>
        Sorry, page not found...
        <NavItemLink to={'/'}>Go to Home</NavItemLink>
      </ErrorText>
    </>
  );
};

const ErrorTitle = styled.h3`
  margin-top: 24px;
  text-align: center;
  font-size: 36px;
`;
const ErrorText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const iconStyle = {
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    color: 'red',
    fontSize: '76px',
  };