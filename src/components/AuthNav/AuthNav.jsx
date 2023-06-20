import { AuthContainer, AuthItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <li>
        <AuthItem to={'/login'}>Log in</AuthItem>
      </li>
      <li>
        <AuthItem to={'/register'}>Register</AuthItem>
      </li>
    </AuthContainer>
  );
};