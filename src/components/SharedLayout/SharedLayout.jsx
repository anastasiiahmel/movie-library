import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { HeaderContainer } from "components/header/Header";

import { Container } from "./SharedLayout.styled";


export const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer/>
      <Suspense fallback={<div className='loading-movie-details'>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};