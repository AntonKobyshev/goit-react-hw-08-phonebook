import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'components/App.styled';
import { Main, Wrapper } from './Layout.styled';
import { Background } from 'components/Background/Background';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Container>
          <Wrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </Container>
      </Main>
      <Background />
    </>
  );
};
