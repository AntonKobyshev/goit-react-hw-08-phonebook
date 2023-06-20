import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Paragraph, Info, InfoLink } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Welcome to the Phonebook application!</Title>
      <Paragraph>
        Here you can conveniently store and manage your contacts. Our
        application provides a simple and intuitive interface for adding,
        editing, and deleting contacts. You will be able to easily find the
        desired contacts using the search function by name. We value your
        privacy and ensure the security of your data. All contacts are stored
        on our database, and we do not share them with third parties. We
          hope that our Phonebook application will make managing your contacts
          easy and convenient. If you have any questions or issues, feel free to
          contact our support team.
      </Paragraph>
      {!isLoggedIn && (
        <Paragraph>
          To get started, please <AuthItem to={'/register'}>Register</AuthItem>{' '}
          or <AuthItem to={'/login'}>Log in</AuthItem> to your account. Once
          authenticated, you can add, edit, and delete contacts as you wish. 
        </Paragraph>
      )}

      <Info>
        Developed by{' '}
        <InfoLink
          href="https://www.linkedin.com/in/antonkobyshev/"
          target="_blank"
          rel="noreferrer"
        >
          Anton Kobyshev
        </InfoLink>
      </Info>
    </>
  );
};
