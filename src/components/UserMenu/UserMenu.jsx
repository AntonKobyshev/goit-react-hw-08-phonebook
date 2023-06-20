import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserWrapper, Title, UserName, BtnLogOut } from './UserMenu.styled';
import { BiLogOut } from 'react-icons/bi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrapper>
      <Title>
        Welcome, <UserName>{user.name}</UserName>
      </Title>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        <BiLogOut />
        Log out
      </BtnLogOut>
    </UserWrapper>
  );
};