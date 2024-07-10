import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { HeaderContainer } from 'components/HeaderWebsite/Header';

import { Container } from './SharedLayout.styled';
import { Loader } from 'components/LoaderWebsite/Loader';

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
