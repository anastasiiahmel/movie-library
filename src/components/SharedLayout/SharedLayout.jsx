import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { HeaderContainer } from 'components/Header/Header';

import { Container } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
